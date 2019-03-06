import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NewUserInputForm from './NewUserInputForm';
import { Link } from 'react-router-dom';
import UserInputList from './UserInputList';

class UserInputHome extends React.Component {


  render(){
    console.log('yes' + this.props.userInputList);
    return (
      <div>
        <h2>THIS IS THE INPUT STUFF</h2>


        <UserInputList userInputList={this.props.userInputList}/>


        <Link to="/newUserInputForm">add input</Link>
      </div>
    );
  }
}
UserInputHome.propTypes = {
  userInputList: PropTypes.object
};

const mapStateToProps = state => {
  return{
    userInputList: state.userInputList
  };
};


export default withRouter(connect(mapStateToProps)(UserInputHome));
