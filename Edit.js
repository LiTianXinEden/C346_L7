import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StatusBar, StyleSheet } from 'react-native';
import { datasource } from './Data.js';

const styles = StyleSheet.create({
    titleStyle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 20,
        borderBottomWidth: 5,
        borderRadius: 5,
    },
})

const Edit = ({ navigation, route }) => {
    const [object, setObject] = useState(route.params.key);
    const [cost, setCost] = useState(route.params.cost);
    const formattedCost = cost.toFixed(2).toString();

    return (
        <View style={{ margin: 10, marginTop: 40, marginBottom: 15, }}>

            <Text style={styles.titleStyle}>Edit Item</Text>

            <View style={{ padding: 10, marginTop: 10 }}>
                <Text>Item name: </Text>
                <TextInput style={{ borderWidth: 1 }} value={object} onChangeText={(text) => setObject(text)} />
            </View>

            <View style={{ padding: 10, marginTop: 10 }}>
                <Text>Item Price: </Text>
                <TextInput style={{ borderWidth: 1 }} value={formattedCost} onChangeText={(text) => setCost(parseFloat(text))} keyboardType="numeric" />

            </View>

            <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flex: 1, margin: 10 }}>
                    <Button title="Save Changes"
                            onPress={() => {
                                let indexnum = 1;
                                if (route.params.type === "Vegetables") {
                                    indexnum = 0;
                                }
                                if (route.params.type === "Fruits") {
                                    indexnum = 1;
                                }
                                if (route.params.type === "Dairy") {
                                    indexnum = 2;
                                }
                                datasource[indexnum].data[route.params.index].key = object;
                                datasource[indexnum].data[route.params.index].cost = cost;
                                navigation.navigate("Home")
                            }}
                            color='#94cf0f'

                    />
                </View>

                <View style={{ flex: 1, margin: 10 }}>
                    <Button title="Remove Item"
                            onPress={() => {
                                let indexnum = 1;
                                if (route.params.type === "Vegetables") {
                                    indexnum = 0;
                                }
                                if (route.params.type === "Fruits") {
                                    indexnum = 1;
                                }
                                if (route.params.type === "Dairy") {
                                    indexnum = 2;
                                }
                                Alert.alert("Are you sure?", '',
                                    [{
                                        text: "Yes", onPress: () => {
                                            datasource[indexnum].data.splice(route.params.index, 1);
                                            navigation.navigate("Home")
                                        }
                                    },
                                        { text: 'No' }])

                            }}
                            color="#d02d42"

                    />
                </View>

            </View>

        </View>
    )
}

export default Edit;
