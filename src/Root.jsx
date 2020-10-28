import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Main from './Components/Main';

import { setMood } from './actions/main.actions';


function mapStateToProps(state) {
  return {
    mood: state.mood
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setMood }, dispatch)
}

class Root extends React.Component {
  constructor(props){
    super(props);

  }
  render(){
    return (
      <div className="App">
        <Main {...this.props}/>
        <div>Mood {this.props.mood}</div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);
