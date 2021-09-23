import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeLayout from "../layout/homelayout/index";
import { createStackNavigator } from "@react-navigation/stack";
import DetailsLayout from "../layout/detailsLayout";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode={'none'}>
        <Stack.Screen name="Login" component={HomeLayout}/>
        <Stack.Screen name="DetailsPage" component={DetailsLayout}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
