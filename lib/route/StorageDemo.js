import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, TextInput, Button, } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';


function StorageDemo() {

    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [savedData, setSavedData] = useState(null);

    useEffect(() => {
        retrieveData();
    },[]);


    const saveData = async () => {
        try {
            await AsyncStorage.setItem('userData', JSON.stringify({ name, department }));
            setName('');
            setDepartment('');
            retrieveData(); // Refresh the displayed data after saving
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };


    const clearData = async () => {
        try {
            await AsyncStorage.clear();
            setName('');
            setDepartment('');
            setSavedData(null);
        } catch (error) {
            console.error('Error clearing data:', error);
        }
    };

    const retrieveData = async () => {
        try {
            const data = await AsyncStorage.getItem('userData');
            if (data !== null) {
                setSavedData(JSON.parse(data));
            }
        } catch (error) {
            console.error('Error retrieving data:', error);
        }
    };

    const styles = StyleSheet.create({
        container: {
            padding: 12,
        },
        outerCountainer: {
            flex: 1
        },
        storeTextHint: {
            fontSize: 16,
            fontWeight: "500",
            color: "#1753ff"
        },
        storedText: {
            fontSize: 16,
            fontWeight: "300",
            color: "#000000"
        },
        button: {
            flex: 1,

        },
        buttonContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
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

        <View>
            <View style={styles.container}>

                <TextInput
                    style={styles.textInput}
                    placeholder='Enter name'
                    placeholderTextColor={'#777'}
                    value={name}
                    selectionColor={"#ff0000"}
                    onChangeText={text => setName(text)} />

                <TextInput
                    style={styles.textInput}
                    placeholder='Enter department'
                    placeholderTextColor={'#777'}
                    value={department}
                    onChangeText={text => setDepartment(text)} />

                <View style={{ height: 20 }} />

                <View style={styles.buttonContainer}>
                    <View style={{ flex: 1 }} >
                        <Button
                            title='Submit'
                            onPress={saveData}
                            style={styles.button}
                            flex={1}
                        />
                    </View>
                    <View style={{ width: 20 }} />

                    <View style={{ flex: 1 }} >
                        <Button
                            flex={1}
                            title='Clear'
                            onPress={clearData}
                            style={styles.button}
                        />
                    </View>



                </View>



                {savedData && (
                    <View style={{ marginTop: 20 }}>
                        <View style={{
                            flexDirection: "row",
                        }}>
                            <Text style={styles.storeTextHint}>Name: </Text>
                            <Text style={styles.storedText}>{savedData.name}</Text>
                        </View>

                        <View style={{
                            flexDirection: "row",
                        }}>
                            <Text style={styles.storeTextHint}>Department: </Text>
                            <Text style={styles.storedText}>{savedData.department}</Text>
                        </View>

                    </View>
                )}

            </View>

        </View>
    );
}



export default StorageDemo;
