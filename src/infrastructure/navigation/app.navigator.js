import React from "react";
 import { NavigationContainer } from "@react-navigation/native";
 import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
 import { Ionicons } from "@expo/vector-icons";
 import { Text } from "react-native";

 import { SafeArea } from "../../components/utility/safe-area.component";

 import { RestaurantsNavigator } from "./restaurants.navigator";

 import { MapScreen } from "../../features/map/screens/map.screen";

 const Tab = createBottomTabNavigator();

 const TAB_ICON = {
   Restaurants: "md-restaurant",
   Map: "md-map",
   Settings: "md-settings",
 };

 const Settings = () => (
   <SafeArea>
     <Text>Settings</Text>
   </SafeArea>
 );

 export const AppNavigator = () => (
   <NavigationContainer>
     <Tab.Navigator
       screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const iconName = TAB_ICON[route.name];
          return (
            <Ionicons name={iconName} size={size} color={color} />
          );
        },
        headerShown: false,
        tabBarActiveTintColor: "#ff5d8f",
        tabBarInactiveTintColor: "gray"
      })}
     >

       <Tab.Screen name="Restaurants" component={RestaurantsNavigator}  />
       <Tab.Screen name="Map" component={MapScreen} />
       <Tab.Screen name="Settings" component={Settings} />
     </Tab.Navigator>
   </NavigationContainer>
 );