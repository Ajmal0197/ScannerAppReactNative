/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
/* eslint-disable react/no-unstable-nested-components */
// TabNavigator.js
import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {ScannerScreen} from './ScannerScreen';
import {openExternalLink} from './utils';
import DetailScreen from './DetailScreen';

const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Scanner"
        component={ScannerScreen}
        options={{
          headerTitle: 'Scanner', // Set your header title here
          headerRight: () => (
            // Right corner image in the header
            <TouchableOpacity
              style={{marginRight: 16}}
              onPress={() =>
                openExternalLink(
                  'https://www.linkedin.com/in/ajmal-hasan-00b71747/',
                )
              }>
              <Image
                source={require('./assets/information.png')} // Replace with your image path
                style={{width: 30, height: 30}} // Adjust the width and height as needed
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default TabNavigator;
