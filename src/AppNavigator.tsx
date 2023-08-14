
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from "react";
import Home from './screens/Home';

export type AuthStackParamList = {
    Home: undefined;
    DetailScreen: undefined;
}

const Stack = createStackNavigator<AuthStackParamList>();
const AppNavigator = () => {

    return (
        <NavigationContainer  >
            <Stack.Navigator screenOptions={{ headerMode: false }} >
                <Stack.Screen name="Home" component={Home}   />
            </Stack.Navigator >
        </NavigationContainer>
    );
}
export default AppNavigator