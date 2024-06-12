import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, ProgressBarAndroid } from 'react-native';


function ApiCallDemo() {

    const url = "https://jsonplaceholder.typicode.com/comments"
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch(url)
            .then((resp) => resp.json())
            .then((json) => {
                console.log(json)
                setData(json)
            })
            .catch((error) => console.error(error))
            .finally(() => {
                setLoading(false)
            });

    }, []);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        outerCountainer: {
            flex: 1
        },
        item: {
            flex: 1,
            flexDirection: "column",
            paddingHorizontal: 12,
            paddingVertical: 12,
            backgroundColor: "#ffffff",
            marginVertical: 8,
            marginHorizontal: 8,
            elevation: 4,
            shadowColor: "#ff0000",
            borderRadius: 10
        },
        title: {
            fontSize: 16,
            fontWeight: "600",
            color: "#000000"
        },

        description: {
            fontSize: 14,
            fontWeight: "400",
            color: "#000000",
            marginTop: 6,
            backgroundColor: "#fbb",
            padding: 6,
            borderRadius: 6

        },
        image: {
            height: 70,
            width: 70,
            borderRadius: 50
        },
    });

    const Item = ({ item }) => (
        <View style={styles.outerCountainer} >
            <View style={styles.item}>

                <Text style={styles.title}>{item.id}. {item.name}</Text>

                <Text style={styles.description}>{item.body}</Text>

            </View>

        </View>
    );

    return (

        <View style={styles.container}>
            {loading ? (
                <View style={{ flex: 1, alignItems: "center", flexDirection: "row" }}>
                    <ProgressBarAndroid
                        style={{ flex: 1 }}
                        color={"#000000"} />

                </View>
            ) : (

                <FlatList
                    scrollEnabled={true}
                    data={data}
                    style={styles.outerCountainer}
                    renderItem={({ item }) => <Item item={item} />}
                    keyExtractor={item => item.id}
                    horizontal={false}
                />

            )}

        </View>

    );
}


export default ApiCallDemo;
