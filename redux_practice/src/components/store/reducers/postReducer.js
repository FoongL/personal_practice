import * as actionTypes from '../actions/actionType';

const initialState = {
  items: [],
  item: {},
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POSTS:
      return {
        ...state,
        items: action.payload,
      };
    case actionTypes.NEW_POSTS:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
