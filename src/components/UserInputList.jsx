import React from 'react';
import UserInput from './UserInput';
import PropTypes from 'prop-types';

function UserInputList(props){
  return (
    <div>
      <hr/>
      {Object.keys(props.userInputList).map(function(userInputId){
        let userInput = props.userInputList[userInputId];
        console.log(userInput, 'here');
        return <UserInput name={userInput.name}
          key={userInputId}
          userInputId={userInputId} />;
      })}
    </div>
  );
}

UserInputList.propTypes = {
  userInputList: PropTypes.object
};


export default UserInputList;
