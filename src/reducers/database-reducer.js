import constants from './../constants';
const { c } = constants;

export default(state={}, action) =>{
  let newState;
  const { name, id } = action;

  switch(action.type) {
  case c.ADD_INPUT:
    newState = Object.assign({}, state, {
      [id]: {
        name: name,
        id: id
      }
    });
    return newState;
  case c.RECEIVE_USER_INPUT:
    newState = Object.assign({}, state);
    newState[action.userInput.id] = action.userInput;
    return newState;
  default:
    return state;
  }
};
