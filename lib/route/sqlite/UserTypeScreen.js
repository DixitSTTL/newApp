import React from 'react';
import { View, Button } from 'react-native';



function UserTypeScreen({navigation}) {


    return (
        <View style={{ alignContent: "center", flexDirection: "column", padding: 20 }} >

            <Button title="Admin" onPress={() => navigation.navigate('AdminScreen')} />

            <View style={{ height: 20 }} />

            <Button title="User" onPress={() => navigation.navigate('UserScreen')}/>

        </View>
    );
}

export default UserTypeScreen;
