import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DetailScreen = ({route}) => {
  const {value} = route.params;

  console.log('value', value);
  return (
    <View>
      <Text>DetailScreen</Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
