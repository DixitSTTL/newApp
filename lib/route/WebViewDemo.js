import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';



function WebViewDemo(){


    const styles = StyleSheet.create({  
        container: {  
            flex: 1,  
        }  
    }) 


    return (
        <View style = {styles.container}>  
            <WebView  
                source = {{ uri:'https://www.javatpoint.com' }}  
            />  
        </View> 
    );
}



export default WebViewDemo;
