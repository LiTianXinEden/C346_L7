import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
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

const Add = ({ navigation }) => {
    const [object, setObject] = useState('');
    const [cost, setCost] = useState('');
    const [category, setCategory] = useState('');

    return (
        <View style={{ margin: 10, marginTop: 40, marginBottom: 15, }}>

            <Text style={styles.titleStyle}>Adding New Item</Text>

            <View style={{ padding: 10, marginTop: 10 }}>
                <Text>Item name: </Text>
                <TextInput style={{ borderWidth: 1 }} onChangeText={(text) => setObject(text)} />
            </View>

            <View style={{ padding: 10, marginTop: 10 }}>
                <Text>Item Price: </Text>
                <TextInput style={{ borderWidth: 1 }} onChangeText={(text) => setCost(parseFloat(text))} keyboardType="numeric" />
            </View>

            <View style={{ padding: 10 }}>
                <Text>Item Category: </Text>
                <RNPickerSelect
                    value={category}
                    onValueChange={(value) => setCategory(value)}
                    items={[
                        { label: 'Vegetables', value: 'Vegetables' },
                        { label: 'Fruits', value: 'Fruits' },
                        { label: 'Dairy', value: 'Dairy' },
                    ]}
                />
            </View>

            <View style={{ padding: 10 }}>
                <Button title="Add Item to List"
                        onPress={() => {
                            let item = { key: object, cost: cost };
                            let indexnum = 1;
                            if (category === "Vegetables") {
                                indexnum = 0;
                            }
                            if (category === "Fruits") {
                                indexnum = 1;
                            }
                            if (category === "Dairy") {
                                indexnum = 2;
                            }
                            datasource[indexnum].data.push(item);
                            navigation.navigate("Home")
                        }}
                        color="#6b6cc6"
                />
            </View>

        </View>

    )
}


export default Add;
