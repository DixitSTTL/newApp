import React, { useState, useEffect } from 'react';
import { View, Button, FlatList, StyleSheet, Text, Image } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';


function UserScreen({ navigation }) {

    const [itemQuantity, setQuantity] = useState('');
    const [itemList, setItemList] = useState([]);

    const Item = ({ item }) => (
        <View style={styles.item} alignItems="center">
            <View style={styles.textContainer}>
                <Text style={styles.title}>item name</Text>
                <Text style={styles.text}>{item.itemName}</Text>
                
                <View style={{height:12}}/>

                <Text style={styles.title}>item quantity</Text>
                <Text style={styles.text}>{item.itemQuantity}</Text>

            </View>

        </View>
    );

    
    useEffect(() => {
        getData();
    }, []);

    const db = openDatabase({
        name: 'ItemDatabase',
        location: 'default'
    });

    const getData = async () => {


        try {
            await db.transaction(tx => {
                tx.executeSql('SELECT * FROM ItemTable', [], (_, { rows }) => {
                    console.log("Query results:", rows);

                    var items = []

                    for (let index = 0; index < rows.length; index++) {
                        // console.log(rows.item(index));
                        items.push(rows.item(index))
                    }
                    setItemList(items)

                });
            });

        } catch (error) {
            console.error(error)
            throw Error("Failed to get Items from database")
        }
    }


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
        },
        outerCountainer: {
            flex: 1
        },
        textContainer: {
            flex: 1,
            flexDirection: "column",
            alignItems: "flex-start",
            margin: 12,
        },
        item: {
            flex: 1,
            flexDirection: "row",
            backgroundColor: "#ffffff",
            marginVertical: 8,
            marginHorizontal: 6,
            elevation: 6,
            shadowColor: "#ff0000",
            borderRadius: 16,
            paddingEnd: 16
        },
        title: {
            fontSize: 12,
            fontWeight: "400",
            color: "#000000",
            opacity:50,

        },
        text: {
            fontSize: 16,
            fontWeight: "600",
            color: "#000000",

        },
        image: {
            width: 24,
            height: 24,
        },
    });

    return (
        <View style={{ alignContent: "center", flex: 1 }} >

            <FlatList
                scrollEnabled={true}
                data={itemList}
                style={styles.outerCountainer}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.id}
            />

        </View>
    );
}

export default UserScreen;
