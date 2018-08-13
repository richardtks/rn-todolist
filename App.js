import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Constants } from 'expo'
import { Provider } from 'react-redux'
import configureStore from './app/store/Store'
import { actionCreators, types } from './app/redux/todoRedux'
import { PersistGate } from 'redux-persist/integration/react'

import Header from './app/components/Header'
import Footer from './app/components/Footer'
import Content from './app/components/Content'
import Input from './app/components/Input'

const { store, persistor } = configureStore()

export default class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      text: ''
    }
  }

  handleInput = text => {
    this.setState({text})
  }

  handleSubmit = () => {
    //console.log("display")
    //console.log(actionCreators.ADD(this.state.text))
    store.dispatch(actionCreators.ADD(this.state.text))
  }
  
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={styles.container}>
            <Header/>
            <Input handleInput={this.handleInput}/>
            <Content />
            <Footer handleSubmit={this.handleSubmit}/>
          </View>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
