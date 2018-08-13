import React from 'react'
import { ScrollView, Text, StyleSheet, FlatList, View } from 'react-native'
import { connect } from 'react-redux'

import CheckBox from './CheckBox'
import RemoveButton from './RemoveButton'

class Content extends React.Component{
    constructor(props){
        super(props)
    }

    renderItem = props => {
        let {text, isChecked } = props.item
        return(
        <View style={styles.listItem}>
            <Text style={[styles.itemText, isChecked && styles.completedText]}>{text}</Text>
            <View style={styles.rightSection}>
                <CheckBox id={props.index} isChecked={isChecked} />
                <RemoveButton id={props.index} />
            </View>
        </View>)
    }

    listKeyExtractor = (item, id) => (id.toString())

    render(){
        return (
            <ScrollView style={styles.list}>
                <FlatList 
                    data={this.props.items}
                    renderItem={this.renderItem}
                    keyExtractor={this.listKeyExtractor} />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'whitesmoke',
        padding: 15,
    },
    rightSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    itemText:{
        fontSize: 20,
    },
    completedText: {
        textDecorationLine: 'line-through'
    },
})

const mapStateToProps = state => {
    return ({ items: state.items, })
}

export default connect(mapStateToProps)(Content)