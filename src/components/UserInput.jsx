import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import c from './../constants';

function UserInput(props){
  console.log(props)

  const userInputInformation =
    <div>
      <h3> {props.name} - {props.userInputId} </h3>
    </div>;

  return(
    <div>
      {userInputInformation}
    </div>
  );
}
UserInput.propTypes= {
  name: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired
};
export default connect()(UserInput);
