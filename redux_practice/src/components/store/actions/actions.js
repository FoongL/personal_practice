import * as ActionTypes from './actionType';
import axios from 'axios';

export const update = (data) => {
  return {
    type: ActionTypes.FETCH_POSTS,
    payload: data,
  };
};

export const updateThunk = () => {
  return (dispatch) => {
    return axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        let list = res.data;
        dispatch(update(list));
      })
      .catch((err) => {
        console.log('Failed', err);
      });
  };
};

export const create = (data) => {
  return {
    type: ActionTypes.NEW_POSTS,
    payload: data,
  };
};

export const createPost = (postData) => {
  return (dispatch) => {
      console.log(postData)
    return axios
      .post('https://jsonplaceholder.typicode.com/posts', postData)
      .then((res) => {
        let list = res.data;
        dispatch(create(list));
      })
      .catch((err) => {
        console.log('Failed', err);
      });
  };
};
