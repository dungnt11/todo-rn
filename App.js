import React, { Component } from 'react';
import { Alert, StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Header from './components/Header';
import ListItem from './components/listItem';
import AddTodo from './components/AddTodo';

export default class extends Component {
  state = {
    todos: [
      { text: 'Buy coffee', id: '1' },
      { text: 'Create react-native app', id: '2' },
    ],
    textTodo: ''
  }

  render() {
    const { todos, textTodo } = this.state;

    const keyPress = (item) => {
      const { todos } = this.state;
      this.setState({ todos: todos.filter(list => list.text !== item) })
    }

    const handleChangeTodo = (value) => {
      this.setState({ textTodo: value });
    }

    const handleAddTodo = () => {
      const { todos } = this.state;
      let currentId = todos.length ? todos[todos.length - 1].id : 1;
      const newId = currentId ? currentId += 1 : 0;
      if (textTodo.length < 3) {
        Alert.alert('Opp !', 'Text must be length more than 3 charaters', [{ text: 'Dissmiss!' }])
      } else {
        this.setState({ todos: [...todos, { text: textTodo, id: newId }], textTodo: '' });
      }
    }

    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          {/* Header */}
          <Header />
          <AddTodo value={textTodo} changeTodo={handleChangeTodo} addTodo={handleAddTodo} />
          <View style={styles.content}>
            <View style={styles.list}>
              <ListItem titile="hello" data={todos} handlePress={(keyPress)} />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30
  },
});