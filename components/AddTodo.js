import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import { Button  } from 'react-native-elements';

export default class extends React.Component {
  render() {
    const { changeTodo, value, addTodo } = this.props;
    return <View style={styles.contain}>
      <Input 
        value={value}
        onChangeText={changeTodo.bind(this)} 
        placeholder='Your todo is here'
      />
      <Button 
      onPress={addTodo.bind(this)} color="white" title="Add todo" 
      />
    </View>
  }
}

const styles = StyleSheet.create({
  contain: {
    height: 120,
    justifyContent: 'space-around',
    margin: 10
  }
});