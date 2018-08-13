import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Header extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.header}>
                <Text>ToDoList</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'lightblue',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
