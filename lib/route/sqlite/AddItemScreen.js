import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage'


function AddItemScreen({ navigation }) {

    const [itemName, setItem] = useState('');
    const [itemQuantity, setQuantity] = useState('');

    var db = openDatabase({
        name: 'ItemDatabase',
        location: 'default'
    });

    useEffect(() => {
        createTable();
    }, []);

    const createTable = async () => {
        const query_create = `CREATE TABLE IF NOT EXISTS ItemTable(
                                id INTEGER PRIMARY KEY AUTOINCREMENT,
                                itemName TEXT NOT NULL,
                                itemQuantity INTEGER NOT NULL
                                );`;
        try {
            await db.executeSql(query_create);
        } catch (err) {
            console.log({ err });
        }
    };

    const insertData = async () => {
        const query_insert = 'INSERT INTO ItemTable (itemName, itemQuantity) VALUES (?, ?)';
        const params = [itemName, itemQuantity];
     
        try {
          await db.executeSql(query_insert, params);
          navigation.navigate('AdminScreen')
        } catch (err) {
          console.log('err', err);
        }
      };
     

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
        },
        outerCountainer: {
            flex: 1
        },
        storeTextHint: {
            fontSize: 16,
            fontWeight: "500",
            color: "#1753ff"
        },
        textInput: {
            color: "#000000",
            backgroundColor: "#eee",
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#1753ff",
            marginVertical: 6,
            padding: 12,
            fontWeight: "500",
        },
    });

    return (
        <View style={{ alignContent: "center", flexDirection: "column", flex: 1, padding: 20 }} >


            <TextInput
                style={styles.textInput}
                placeholder='Enter item name'
                placeholderTextColor={'#777'}
                onChangeText={text => setItem(text)}
                inputMode='text'

            />

            <TextInput
                style={styles.textInput}
                placeholder='Enter quantity'
                placeholderTextColor={'#777'}
                onChangeText={text => setQuantity(text)}
                inputMode='numeric'
                maxLength={2}
            />

            <View style={{ height: 20 }} />

            <Button title="Add" onPress={insertData} />

        </View>
    );
}

export default AddItemScreen;
