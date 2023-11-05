import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './views/HomeScreen';
import AddTextScreen from './views/AddTextScreen';
import EditItemScreen from './views/EditItemScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddText" component={AddTextScreen} />
        <Stack.Screen name="EditItem" component={EditItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
