import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/Navigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Navigator />
        </SafeAreaProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
