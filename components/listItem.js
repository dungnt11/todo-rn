import React from 'react';
import { StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';

export default class extends React.Component {
  render() {
    const { data } = this.props;
    return <FlatList
      data={data}
      renderItem={({ item }, index) => <TouchableOpacity onPress={this.props.handlePress.bind(this, item.text)}>
        <ListItem key={index} style={styles.text} title={item.text} bottomDivider>
        </ListItem>
      </TouchableOpacity>}
      keyExtractor={item => item.id}
    />
  }
}

const styles = StyleSheet.create({
  item: {
    paddingLeft: 15,
    borderWidth: 1,
    borderRadius: 2,
    margin: 12,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#ccc',
  },
  text: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 5
  }
});