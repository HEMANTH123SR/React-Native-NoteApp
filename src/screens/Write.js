import React from "react";
import {View,Text,StyleSheet} from "react-native";

const Write=()=>{
    return(
        <View style={styles.container}>
            <Text>Write</Text>
        </View>
    )
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})

export default Write;