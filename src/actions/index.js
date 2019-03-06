import constants from './../constants';
const { firebaseConfig, c } = constants;
import Firebase from 'firebase';
import Moment from 'Moment';

firebase.initializeApp(firebaseConfig);
const userInputs = firebase.database().ref('userInputs');

export function addUserInput(_name){
  return () => userInputs.push({
    name: _name
  });
}

function receiveUserInput(userInputFromFirebase) {
  return {
    type: c.RECEIVE_USER_INPUT,
    userInput: userInputFromFirebase
  };
}

export function watchFirebaseUserInputsRef() {
  return function(dispatch) {
    userInputs.on('child_added', data => {
      const newUserInput = Object.assign({}, data.val(),{
        id: data.getKey()
      });
      dispatch(receiveUserInput(newUserInput));
    });
  };
}
