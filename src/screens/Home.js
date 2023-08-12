import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  FlatList,
} from "react-native";
import { notesTemp } from "../other/notesTestData";
import { hashColor } from "../other/notesTestData";

const renderNotesMini = ({ item }) => {
  return (
    <View style={[styles.miniNotesContainer, {}]}>
      <Text>{item.title}</Text>
      <Text>{item.notes.slice(0,80)}</Text>
    </View>
  );
};

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.scrollContainer}>
          <FlatList
            data={notesTemp}
            keyExtractor={(item) => item.id}
            renderItem={renderNotesMini}
            numColumns={2}
            columnWrapperStyle={styles.columnWrapper}

          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FCFCFC",
  },
  miniNotesContainer: {
    backgroundColor:"#FFAB91",
    width:170,
    height:170,
    margin:10,
    borderRadius:20,
    padding:10,
  },
  scrollContainer:{

  }, columnWrapper: {
    justifyContent: "space-between", // This will create spacing between columns
    paddingHorizontal: 10
     // This will create spacing between columns
  },
});

export default Home;
