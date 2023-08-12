import React,{useState} from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
// import { Feather } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
const Write = () => {
    const [title,setTitle]=useState("");
    const [notes,setNotes]=useState("");
    const [isLiked,setIsLiked]=useState(false);
  const handleTextTitleChange = (data) => {
    
  };
  const handleInputTextNoteChange = () => {};
  const handleHeartIncon = () => {
    setIsLiked(!isLiked)
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputTextTitleContainer}>
        <TextInput
          placeholder="Title"
          style={styles.inputTextTitle}
          onChangeText={handleTextTitleChange}
          cursorColor={"#FFCC80"}
        />
        <AntDesign
          name="heart"
          size={28}
          color={ isLiked ? "black" : "white"}
          style={{ marginLeft: 240, marginTop: 5 }}
          onPress={handleHeartIncon}
          
        />
      </View>
      <View style={styles.inputTextNoteContainer}>
        <TextInput
          placeholder="Enter The Text"
          style={styles.inputTextNote}
          multiline={true}
          onChangeText={handleInputTextNoteChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC",
  },
  inputTextTitle: {
    fontSize: 30,
    fontStyle: "italic",
    fontWeight: "bold",
    textDecorationLine: "underline",
    // margin:10,
    // backgroundColor:"#F6F4EB"
  },
  inputTextTitleContainer: {
    padding: 20,
    backgroundColor: "#E6E4E2",
    flexDirection: "row",
  },
  inputTextNote: {
    fontSize: 20,
  },
  inputTextNoteContainer: {
    margin: 10,
  },
});

export default Write;
