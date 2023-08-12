import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Write from "../screens/Write";
import Favourite from "../screens/Favourite";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

const TabContainer = () => {
  return (
    <Tab.Navigator 
    screenOptions={({route})=>({
      tabBarIcon:({focused,color,size})=>{
        let iconSize=size+10;
        let iconMargin = 0;
        // if(route.name=="Write"){
        //   iconSize+=10;
        // }
      
        if (route.name === "Write") {
          iconSize += 30; // Increase the size for the "Write" tab icon
          iconMargin = -30; // Adjust the margin for alignment
        }

        const iconStyle = {
          marginTop: iconMargin,
        };

        if (route.name === "Note") {
          return (
            <FontAwesome name="sticky-note" size={iconSize} color={color}
            style={iconStyle}
            />
          );
        } else if (route.name === "Write") {
          return (
            <AntDesign name="pluscircle" size={iconSize} color={color} 
            style={iconStyle}
            />
          );
        } else if (route.name === "Favourite") {
          return (
            <MaterialIcons name="favorite" size={iconSize} color={color} 
            style={iconStyle}
            />
          );
        }
      },
      // tabBarLabel:"",
    })}

    
    >
      <Tab.Screen
        name="Note"
        component={Home}
        // options={{
        //   tabBarIcon: () => (
        //     <FontAwesome name="sticky-note" size={30} color="black" />
        //   ),
        // }}
      />
      <Tab.Screen
        name="Write"
        component={Write}
        // options={{
        //   tabBarIcon: () => (
        //     <AntDesign name="pluscircle" size={50} color="black" />
        //   ),
        // }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        // options={{
        //   tabBarIcon: () => (
        //     <MaterialIcons name="favorite" size={30} color="black" />
        //   ),
        // }}
      />
    </Tab.Navigator>
  );
};



export default TabContainer;

/*
 <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconSize = size;
          if (route.name === "Write") {
            iconSize += 10; // Increase the size for the "Write" tab icon
          }
          
          // You can adjust the color based on the 'focused' state if needed

          if (route.name === "Note") {
            return (
              <FontAwesome name="sticky-note" size={iconSize} color={color} />
            );
          } else if (route.name === "Write") {
            return (
              <AntDesign name="pluscircle" size={iconSize} color={color} />
            );
          } else if (route.name === "Favourite") {
            return (
              <MaterialIcons name="favorite" size={iconSize} color={color} />
            );
          }
        },
      })}
    >
*/