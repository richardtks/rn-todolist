import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux'
import { actionCreators } from '../redux/todoRedux';

class CheckBox extends Component {
  constructor(props) {
    super(props);
  }

  handleToggle = () => {
      this.props.toggleCheckbox(this.props.id)
  }

  render() {
    return (
        <TouchableOpacity onPress={this.handleToggle}>
            <View style={styles.outerBox}>
                <View style={[this.props.isChecked && styles.checkedBox]} />
            </View>
        </TouchableOpacity>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    toggleCheckbox: (id) => {
        dispatch( actionCreators.TOGGLE(id))
    }
})

const styles = StyleSheet.create({
    outerBox: {
        height: 20,
        width: 20,
        borderWidth: 2,
        borderColor: 'black',
        padding: 0.5,
        margin: 5,
    },
    checkedBox:{
        flex: 1,
        backgroundColor: 'blue',
    }
});

export default connect(null, mapDispatchToProps)(CheckBox)