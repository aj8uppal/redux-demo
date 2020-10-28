import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers/main.reducers';

import logo from './logo.svg';
import './App.css';

import Root from './Root';

const rootStore = createStore(rootReducer, applyMiddleware(thunk));


class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Provider store={rootStore}>
        <Root />
      </Provider>
    );
  }
}

export default App;


/*

Steps to adding action/reducer pair:

1. Identify datatype you want to share
2. Add action in actions.js (if it is an API call, look into redux-thunk for async actions/reducers)
3. Add reducer in reducers.js
4. Go to Root.jsx
  5. Add new setters to bindActionCreators, import
  6. Add new state variable to mapStateToProps

Note: all variables will be passed down as a prop, make sure you add {...this.props} to children components who need access to the object.

export function searchProgram(search){
  return async dispatch => {
    async function onSuccess(success){
      let results = await success.json();
      dispatch({
        type: 'SET_SEARCH',
        search: results
      });
      dispatch({
        type: 'SET_SEARCH_FLAG',
        searchFlag: true
      });
      return {payload: results}
    }
    function onError(error){
      dispatch({
        type: 'SERVER_ERROR',
      })
    }
    try {
      const res = await fetch(`${config.API_BASE}${config.ENDPOINTS["search_program"]}`, {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({query: search})
      });
      return onSuccess(res);
    }catch(err){
      return onError(err);
    }
  }
}

*/
