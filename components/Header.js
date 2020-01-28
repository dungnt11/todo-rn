import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class extends React.Component {
  render() {
    return <View style={styles.header}>
      <Text style={styles.title}>My todos</Text>
    </View>
  }
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: 'coral',
  },
  title: {
    color: 'white',
    textAlign: 'center',
    paddingTop: 30
  }
});