import React from 'react';
import UserInput from './UserInput';
import PropTypes from 'prop-types';

function UserInputList(props){
  console.log(props)
    return (
      <div>
        <hr/>
        {Object.keys(props.UserInputList).map(function(userInputId){
          let userInput = props.UserInputList[userInputId];
          return <UserInput name={UserInput.name}
                  key={userInputId}
                  userInputId={userInputId} />;
              })}
      </div>
    );
}

UserInputList.propTypes = {
  userInputList: PropTypes.object
};


export default UserInputList
