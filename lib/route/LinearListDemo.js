import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image } from 'react-native';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-64646',
        title: "The Beat of Nature"        ,
        image: "https://firebasestorage.googleapis.com/v0/b/meditation-app-3baf6.appspot.com/o/images%2Ffree-flat-nature-illustration-f8kjm.webp?alt=media&token=ad5332cb-717d-41ec-822b-25069568c222",
        des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-53453',
        title: 'Dune',
        image: "https://firebasestorage.googleapis.com/v0/b/meditation-app-3baf6.appspot.com/o/img_tune_6.png?alt=media&token=32df19fe-03a0-4f57-8723-4816d6868690",
        des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: '58694a0f-3da1-471f-bd96-45345',
        title: 'Forest',
        image: "https://firebasestorage.googleapis.com/v0/b/meditation-app-3baf6.appspot.com/o/img_tune_7.png?alt=media&token=fe8df72c-c1bb-47ff-a9da-3533a5f4ae26",
        des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: '58694a0f-3da1-471f-bd96-54644',
        title: "Morning Vibes"        ,
        image: "https://firebasestorage.googleapis.com/v0/b/meditation-app-3baf6.appspot.com/o/images%2Fautumn-morning-landscape-illustration-rolling-hills-lush-meadows-and-vibrant-trees-mountains-on-the-background-make-it-ideal-for-posters-and-banners-celebrating-the-season-not-ai-free-vector.jpg?alt=media&token=c97dde54-fa39-425d-8949-c13855d61766",
        des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: '58694a0f-3da1-471f-bd96-54453',
        title: 'Mountains',
        image: "https://firebasestorage.googleapis.com/v0/b/meditation-app-3baf6.appspot.com/o/img_tune_9.png?alt=media&token=218d3dd6-4ef7-4afe-9a22-0a3a3d9a18be",
        des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: '58694a0f-3da1-471f-bd96-77555',
        title: "Earth View"        ,
        image: "https://firebasestorage.googleapis.com/v0/b/meditation-app-3baf6.appspot.com/o/img_tune_8.png?alt=media&token=4dc110d8-3f97-44bc-9cd6-762b857339d7",
        des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: '58694a0f-3da1-471f-bd96-87776',
        title: "Lofi Relax",
        image: "https://firebasestorage.googleapis.com/v0/b/meditation-app-3baf6.appspot.com/o/images%2Frelaxing-8431688_1280.jpg?alt=media&token=f80fd41b-a344-4a34-bf70-273f39abcdd4",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
];

const Item = ({ item }) => (
    <View style={styles.outerCountainer} >
        <View style={styles.item}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.des}</Text>

            </View>
        </View>

    </View>
);


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
        marginHorizontal: 12,
        elevation: 6,
        shadowColor: "#ff0000",
        borderRadius: 20
    },
    title: {
        fontSize: 16,
        fontWeight: "600",
        color:"#000000"
    },

    description: {
        fontSize: 12,
        fontWeight: "300",
        color:"#000000",
        opacity:0.7

    },
    image: {
        width: 150,
        maxHeight:"auto",
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
    },
});

function LinearListDemo() {

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                scrollEnabled={true}
                data={DATA}                
                style={styles.outerCountainer}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.id}
                horizontal={false}
            />


        </SafeAreaView>
    );
}


export default LinearListDemo;
