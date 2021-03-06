import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppWithNavigationState from './AppWithNavigationState';
import createStore from './reducers/rootReducer';

export const store = createStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default App;
