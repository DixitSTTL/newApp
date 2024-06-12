import React from 'react';
import { View, FlatList, StyleSheet, Text, Image, } from 'react-native';



function GridListDemo(){

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
            image: 'https://firebasestorage.googleapis.com/v0/b/meditation-app-3baf6.appspot.com/o/img_tune_8.png?alt=media&token=4dc110d8-3f97-44bc-9cd6-762b857339d7'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
            image: 'https://firebasestorage.googleapis.com/v0/b/meditation-app-3baf6.appspot.com/o/img_tune_6.png?alt=media&token=32df19fe-03a0-4f57-8723-4816d6868690'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
            image: 'https://firebasestorage.googleapis.com/v0/b/meditation-app-3baf6.appspot.com/o/images%2Fautumn-morning-landscape-illustration-rolling-hills-lush-meadows-and-vibrant-trees-mountains-on-the-background-make-it-ideal-for-posters-and-banners-celebrating-the-season-not-ai-free-vector.jpg?alt=media&token=c97dde54-fa39-425d-8949-c13855d61766'
        },
        {
            id: '58694a0f-3da1-471f-bd96-54545511',
            title: 'Fourth Item',
            image: 'https://firebasestorage.googleapis.com/v0/b/meditation-app-3baf6.appspot.com/o/images%2Frelaxing-8431688_1280.jpg?alt=media&token=f80fd41b-a344-4a34-bf70-273f39abcdd4'
        },
        {
            id: '58694a0f-3da1-471f-bd96-545454545',
            title: 'Fifth Item',
            image: 'https://firebasestorage.googleapis.com/v0/b/meditation-app-3baf6.appspot.com/o/images%2Ffree-flat-nature-illustration-f8kjm.webp?alt=media&token=ad5332cb-717d-41ec-822b-25069568c222'
        },
        {
            id: '58694a0f-3da1-471f-bd96-536747756',
            title: 'Sixth Item',
            image: 'https://firebasestorage.googleapis.com/v0/b/meditation-app-3baf6.appspot.com/o/img_tune_5.png?alt=media&token=18db4554-ab35-43d9-b90c-35a6eeb11fa7'
        },
    ];
    

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
            padding: 12,
            alignItems: "center",
            backgroundColor: "#ffffff",
            marginVertical: 8,
            marginHorizontal: 8,
            elevation: 4,
            shadowColor: "#ff0000",
            borderRadius: 10
        },
        title: {
            marginTop: 12,
            fontSize: 16,
            fontWeight: "300",
            color:"#000000"
        },
        image: {
            height: 70,
            width: 70,
            borderRadius: 50
        },
    });

    const Item = ({ item }) => (
        <View style={styles.outerCountainer} >
          <View  style={styles.item}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
      
        </View>
      );

    return (
        <FlatList
                scrollEnabled={true}
                data={DATA}
                numColumns={2}
                style={styles.container}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.id}
                horizontal={false}
        
            />
    );
}


export default GridListDemo;
