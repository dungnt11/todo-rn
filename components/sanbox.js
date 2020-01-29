import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class extends React.Component {
  render() {
    return <View style={styles.container}>
      <Text style={styles.colOne}>One</Text>
      <Text style={styles.colTwo}>Two</Text>
      <Text style={styles.colThree}>Three</Text>
      <Text style={styles.colFour}>Four</Text>
    </View>
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  colOne: {
    backgroundColor: 'orange',
    padding: 10,
    textAlign: 'center',
    flex:1
  },
  colTwo: {
    backgroundColor: 'lightblue',
    padding: 10,
    textAlign: 'center',
    flex:1
  },
  colThree: {
    backgroundColor: 'coral',
    padding: 10,
    textAlign: 'center',
    flex:1
  },
  colFour: {
    backgroundColor: 'red',
    padding: 10,
    textAlign: 'center',
    flex:1
  }
});