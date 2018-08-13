import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

import { connect } from 'react-redux'
import { actionCreators } from '../redux/todoRedux'

class InputToDo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            text: '',
        }
    }

    handleEndEditing = () => {
        this.props.handleSubmit({text: this.state.text, isChecked: false})
        this.setState({text: ''})
        //this.props.handleSubmit(event.nativeEvent.text)
    }

    handleChangeText = text => {
        this.setState({text})
    }

    render(){
        return (
            <TextInput 
                style={styles.input}
                placeholder="Enter your ToDo"
                value={this.state.text}
                onChangeText={this.handleChangeText}
                onSubmitEditing={this.handleEndEditing} />
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        padding: 15,
        borderColor: 'whitesmoke',
        borderBottomWidth: 1,
    },
})

const mapStateToProps = state => {
    return ({
        inputText: state.inputText,
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        handleSubmit: (text) => {
            dispatch( actionCreators.ADD(text))
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(InputToDo)