import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserInputHome from './UserInputHome';
import NewUserInputForm from './NewUserInputForm';
import {connect} from 'react-redux';
import constants from './../constants';
const { c } = constants;
import * as actions from './../actions';

class App extends React.Component {

  componentWillMount(){
    const { dispatch } = this.props;
    const { watchFirebaseUserInputsRef } = actions;
    dispatch(watchFirebaseUserInputsRef());
  }

  render(){
    return (
      <div>
        <h1>THIS IS THE TEST</h1>
        <Switch>
          <Route exact path='/' render={()=><UserInputHome userInputList={this.props.userInputList}/>} />
          <Route path='/newUserInputForm' render={()=><NewUserInputForm/>} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  userInputList: PropTypes.object
};

const mapStateToProps = state => {
  return{
    userInputList: state.userInputList
  };
};

export default withRouter(connect(mapStateToProps)(App));
