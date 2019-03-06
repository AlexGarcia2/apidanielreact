import React from 'react';
import {connect} from 'react-redux';
import {v4} from 'uuid';
import { addUserInput } from './../actions';
import constants from './../constants';
const { c } = constants;

function NewUserInputForm (props){
  let _name = null;

  function handleNewInputFormSubmisson(event){
    const { dispatch } = props;
    event.preventDefault();
    dispatch(addUserInput(_name.value));
    _name.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewInputFormSubmisson}>
        <input
          type="text"
          id="name"
          placeholder="Your Name"
          ref={(input) => {_name = input;}}
        />
        <button type='submit'>Add Input</button>
      </form>
    </div>
  );
}



export default connect()(NewUserInputForm);
