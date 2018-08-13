import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { connect } from 'react-redux'
import { actionCreators } from '../redux/todoRedux'

class RemoveButton extends Component {
  
  handleRemove = () => {
    this.props.remove(this.props.id)
  }

  render() {
    return (
      <TouchableOpacity onPress={this.handleRemove}>
        <View style={{paddingLeft: 5}}>
          <Text style={styles.removeButton}>&times;</Text>
        </View>
        </TouchableOpacity>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  remove: (id) => {
    dispatch(actionCreators.REMOVE(id))
  }
})

const styles = StyleSheet.create({
    removeButton: {
        color: 'red',
        fontSize: 25,
        textAlign: 'center'
    }
});

export default connect(null, mapDispatchToProps)(RemoveButton);
