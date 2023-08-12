import React from "react";
import {View,Text,StyleSheet} from "react-native";

const Favourite=()=>{
    return(
        <View style={styles.container}>
            <Text>Favourite</Text>
        </View>
    )
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#FCFCFC"
    }
})

export default Favourite;