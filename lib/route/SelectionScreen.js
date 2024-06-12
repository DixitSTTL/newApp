import React from 'react';
import { View, Button } from 'react-native';




function SelectionScreen({ navigation }) {

  return (
    <View style={{ flex: 1, margin: 16 }}>
      <View style={{ height: 20 }} />

      <Button title='Grid List' onPress={() => navigation.navigate('Grid List')} />

      <View style={{ height: 20 }} />

      <Button title='Linear List' onPress={() => navigation.navigate('Linear List')} />

      <View style={{ height: 20 }} />

      <Button title='WebView' onPress={() => navigation.navigate('WebView')} />

      <View style={{ height: 20 }} />

      <Button title='Map Demo' onPress={() => navigation.navigate('MapDemo')} />

      <View style={{ height: 20 }} />

      <Button title='Storage Demo' onPress={() => navigation.navigate('StorageDemo')} />

      <View style={{ height: 20 }} />

      <Button title='Sqlite Demo' onPress={() => navigation.navigate('SqliteDemo')} />

      <View style={{ height: 20 }} />

      <Button title='Api Demo' onPress={() => navigation.navigate('ApiCallDemo')} />

    </View>
  );
}

export default SelectionScreen;
