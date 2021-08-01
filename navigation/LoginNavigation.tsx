import * as React from 'react';
import { View, Text, requireNativeComponent } from 'react-native';
import { useFonts } from '@use-expo/font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/AuthScreens/Login'
import Signup from '../screens/AuthScreens/Signup'

const Stack = createStackNavigator();

export default function App() {
    let [fontsLoaded] = useFonts({
    'logo-font': require('../assets/fonts/Staatliches-Regular.ttf')
    });
    if (!fontsLoaded) {
        return <View></View>
    }else{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Signup' options={{headerShown:false}} component={Signup} />
                <Stack.Screen options={{headerShown:false}} name='Login' component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    )
    }
}