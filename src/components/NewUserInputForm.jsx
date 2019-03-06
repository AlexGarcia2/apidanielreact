import React from 'react';
import c from './../constants';
import {connect} from 'react-redux';
import {v4} from 'uuid';

function NewUserInputForm (props){
  console.log(props);
  let _name = null;

function handleNewInputFormSubmisson(event){
  const{dispatch} = props;
  event.preventDefault();
  const action = {
    type: c.ADD_INPUT,
    id: v4(),
    name: _name.value
  };
  dispatch(action);
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
