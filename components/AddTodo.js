import React from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native';

export default class extends React.Component {
  render() {
    const { changeTodo, value, addTodo } = this.props;
    return <View>
      <TextInput style={styles.input} value={value} onChangeText={changeTodo.bind(this)} />
      <Button onPress={addTodo.bind(this)} color="coral" title="Add todo" />
    </View>
  }
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: 'lightblue',
  }
});