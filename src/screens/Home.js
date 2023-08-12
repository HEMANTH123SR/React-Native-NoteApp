import React from "react";
import {View,Text,StyleSheet,ScrollView,SafeAreaView, FlatList} from "react-native";
import {notesTemp} from "../other/notesTestData";
import {hashColor} from "../other/notesTestData"
const Home=()=>{
    return(
        <View style={styles.container}>
           <SafeAreaView>
            <ScrollView>
                <FlatList
                data={notesTemp}
                keyExtractor={(item)=>item.id}
                />
            </ScrollView>
           </SafeAreaView>
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

export default Home;