import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadGreetings } from '../redux/greetings';

const Greeting = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGreetings());
  }, []);
  const { greeting } = useSelector((state) => state.greetingsReducer.greeting);
  if (greeting) {
    return (
      <>
        <h1>{ greeting }</h1>
      </>
    );
  }
  return (
    <>
      <p>Please wait...</p>
    </>
  );
};

export default Greeting;
