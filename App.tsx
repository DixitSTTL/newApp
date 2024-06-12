import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GridListDemo from './lib/route/GridListDemo';
import SelectionScreen from './lib/route/SelectionScreen';
import LinearListDemo from './lib/route/LinearListDemo';
import WebViewDemo from './lib/route/WebViewDemo';
import MapDemo from './lib/route/MapDemo';
import StorageDemo from './lib/route/StorageDemo';
import UserTypeScreen from './lib/route/sqlite/UserTypeScreen';
import AdminScreen from './lib/route/sqlite/AdminScreen';
import AddItemScreen from './lib/route/sqlite/AddItemScreen';
import UserScreen from './lib/route/sqlite/UserScreen';
import ApiCallDemo from './lib/route/ApiCallDemo';

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Selection" component={SelectionScreen} />
        <Stack.Screen name="Grid List" component={GridListDemo} />
        <Stack.Screen name="Linear List" component={LinearListDemo} />
        <Stack.Screen name="WebView" component={WebViewDemo} />
        <Stack.Screen name="MapDemo" component={MapDemo} />
        <Stack.Screen name="StorageDemo" component={StorageDemo} />
        <Stack.Screen name="SqliteDemo" component={UserTypeScreen} />
        <Stack.Screen name="AdminScreen" component={AdminScreen} />
        <Stack.Screen name="AddItemScreen" component={AddItemScreen} />
        <Stack.Screen name="UserScreen" component={UserScreen} />
        <Stack.Screen name="ApiCallDemo" component={ApiCallDemo} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App