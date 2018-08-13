import React from 'react'
import { Button, View, StyleSheet } from 'react-native'

import { connect } from 'react-redux'
import { actionCreators } from '../redux/todoRedux'

class Footer extends React.Component{
    render(){
        return(
            <View style={styles.footer}>
                <Button 
                    title='Remove selected item'
                    color='red'
                    onPress={this.props.removeCompleted} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    footer: {
        height: 45,
        justifyContent: 'center',
        elevation: 3,
        backgroundColor: 'white',
    },
})

const mapDispatchToProps = dispatch => {
    return ({
        removeCompleted: () => {
            dispatch( actionCreators.REMOVECOMPLETED())
        }
    })
}

export default connect(null, mapDispatchToProps)(Footer)