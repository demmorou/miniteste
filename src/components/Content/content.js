import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeName } from './../../actions';
import PropTypes from 'prop-types';

function Content(props) {
  // getting name from useSelector
  const name = useSelector(state => state.name);

  // setting up the dispatch
  const dispatch = useDispatch();

  // this function set the a new name in the store from changeName action
  const updateName = (name) => {
    setTimeout(() => dispatch(changeName(name)), 20000);
  }

  // useEffect called when the component is begin mounted
  useEffect(() => {
    updateName(props.name);
  });

  return (
    <div style={{ color: 'white', fontSize: 36 }}>
      Parabéns { name }, você finalizou o seu teste.
    </div>
  );
}

// check and valid the type of props
Content.propTypes = {
  name: PropTypes.string
}

export default Content;
