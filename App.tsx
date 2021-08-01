import { Component } from 'react';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import SwitchNavigator from './navigation/LoginNavigation'
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers/index'
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';

const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(reducer,middleware);

export default class App extends React.Component {

  render(){
    return (
      <Provider store={store}>
        <SwitchNavigator />
      </Provider>
    );
  }
}