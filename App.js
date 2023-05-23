import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your components here
import MainComponent from './MainComponent';
import BlogComponent from './BlogComponent';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainComponent} />
        <Stack.Screen name="Blog" component={BlogComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
