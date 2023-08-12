import React from "react";
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Tab=createBottomTabNavigator();

const TabContainer=()=>{
    return <Tab.Navigator>
<Tab.Screen/>
<Tab.Screen/>
<Tab.Screen/>
    </Tab.Navigator>
}

const Navigation=()=>{
    return(
<NavigationContainer>
<TabContainer/>
</NavigationContainer>
    )
};

export default Navigation;