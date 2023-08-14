import React, { Component } from 'react';

import { Provider } from 'react-redux';
import AppNavigator from './src/AppNavigator';
import { store } from './src/store';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <AppNavigator /> 
      </Provider>
    )
  }
}

export default App;
