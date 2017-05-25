import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './app'
import { Provider } from 'react-redux'
import configureStore from './configureStore'

const store = configureStore()

const rnredux = () => (
  <Provider store={store}>
    <App />
  </Provider>
)
AppRegistry.registerComponent('rnredux', () => rnredux);
