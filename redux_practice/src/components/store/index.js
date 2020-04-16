import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
//import logger from 'redux-logger';
import thunk from 'redux-thunk';
import postReducer from './reducers/postReducer.js'


const initialState = {};

const middleware = [thunk];
export const rootReducer = combineReducers({
  posts: postReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
