import React, { useState } from 'react';
import { StatusBar, Button, SectionList, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { datasource } from './Data.js';


const styles = StyleSheet.create({
    titleStyle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        borderBottomWidth: 5,
        borderRadius: 5,
    },

    cartIcon: {
        color: '#324274',
    },

    leafIcon: {
        color: '#7fff00',
    },

    appleIcon: {
        color: '#c3210c',

    },

    cowIcon: {
        color: '#053957',

    },

    objectStyle: {
        textAlign: 'left',
        fontSize: 15,
    },

    costStyle: {
        textAlign: 'right',
        fontSize: 15,
    },

    textStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 5,

    },

    headerTextStyle: {
        textAlign: 'center',
        fontSize: 18,
        borderWidth: 1
    },

    borderStyle: {
        borderWidth: 1,
        borderColor: '#0b0b0b',
    },

    topStyle: {
        fontWeight: 'bold',
        paddingRight: 10,
        marginRight: 10,
    },
})


const Home = ({ navigation }) => {

    const totalCost = () => {
        return datasource.reduce((total, section) => {
            // For each section, sum the 'cost' of each item
            return total + section.data.reduce((sum, item) => sum + item.cost, 0);
        }, 0).toFixed(2);
    }
    //====================================================
    const renderItem = ({ item, index, section }) => {
        return (
            <TouchableOpacity style={styles.borderStyle} onPress={() => { navigation.navigate("Edit", { index: index, type: section.title, key: item.key, cost: item.cost }); }}>
                <View style={styles.textStyle}>
                    <Text styles={styles.objectStyle}>{item.key}</Text>
                    <Text style={styles.costStyle}>${item.cost.toFixed(2)}</Text>
                </View>
            </TouchableOpacity>

        )
    }
    //====================================================
    return (
        <View style={{ margin: 10, marginTop: 50, marginBottom: 15, }}>
            <StatusBar hidden={true} />

            <Text style={styles.titleStyle} >
                Grocery Shopping List <FontAwesome6 name="cart-shopping" size={24} marginLeft={10} style={styles.cartIcon} />
            </Text>


            <Button title="Add an item to list" color="#009bcc" onPress={() => { navigation.navigate('Add') }} />

            <Text></Text>

            <SectionList style={{ marginBottom: 50, }}
                         sections={datasource}
                         renderItem={renderItem}

                         renderSectionHeader={({ section: { title, bgcolor, icon } }) => (
                             <View>
                                 <Text style={[styles.headerTextStyle, { backgroundColor: bgcolor }]}>
                                     <Text style={styles.topStyle}>{title}</Text>
                                     {icon === "leaf" && <FontAwesome5 name="leaf" size={24} style={styles.leafIcon} />}
                                     {icon === "apple-alt" && <FontAwesome5 name="apple-alt" size={24} marginLeft={10} style={styles.appleIcon} />}
                                     {icon === "cow" && <MaterialCommunityIcons name="cow" size={24} marginLeft={10} style={styles.cowIcon} />}

                                 </Text>
                             </View>
                         )}

            />

            {/*<Text style={{ fontSize: 18, textDecorationLine: 'underline' }}>*/}
            {/*    Total Cost: ${totalCost()}*/}
            {/*</Text>*/}
            {/* Button to calculate total cost */}
            <Button title="Calculate total cost" onPress={() => {
                Alert.alert(`Total Cost: ${totalCost()}`)
            }}
            color="#639ad2"

            />



        </View>
    )
}


export default Home;


