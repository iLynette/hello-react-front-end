const LOAD_GREETING = 'helo-react-front-end/greetings/LOAD_GREETING';

const initialState = { greeting: '' };

export const setGreetings = (payload) => ({
  type: LOAD_GREETING,
  payload,
});

export const loadGreetings = () => async (dispatch) => {
  const result = await fetch('http://localhost:3000/greetings');
  const data = await result.json();
  dispatch(setGreetings(data));
};

const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_GREETING:
      return { ...state, greeting: action.payload };
    default:
      return state;
  }
};

export default greetingsReducer;
