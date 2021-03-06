import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialComunityIcons } from "react-native-vector-icons";

import RestaurantsScreen from "../screens/Restaurants";
import TopRestaurantsScreen from "../screens/TopRestaurants";
import SearchScreen from "../screens/Search";
import MyAccountScreen from "../screens/MyAccount";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function RestaurantsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Restaurantes" component={RestaurantsScreen} />
      <Stack.Screen name="Restaurante" component={RestaurantsScreen} />
    </Stack.Navigator>
  );
}

function TopRestaurantsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Top 5" component={TopRestaurantsScreen} />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Restaurantes"
          component={RestaurantsStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialComunityIcons name="home" color={color} size={size} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
