import c from './../constants'

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
    default:
      return state
  }
};
