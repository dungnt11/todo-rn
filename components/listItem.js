import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

export default class extends React.Component {
  render() {
    const { data } = this.props;
    return <View>      
      <FlatList
        data={data}
        renderItem={({ item }) => <TouchableOpacity onPress={this.props.handlePress.bind(this, item.text)}>
            <Text style={styles.item}>{item.text}</Text>
          </TouchableOpacity>}
        keyExtractor={item => item.id}
      />
    </View>
  }
}

const styles = StyleSheet.create({
  item: {
    paddingLeft: 15,
    borderWidth: 1,
    borderRadius: 2,
    borderStyle: 'dashed',
    margin: 12,
  }
});