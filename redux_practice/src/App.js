import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware } from 'redux'

import Posts from './components/Posts';
import PostForm from './components/PostForm';

import store from './components/store/index'
//const store = createStore(()=>[],{},applyMiddleware())

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider> 
  );
}

export default App;
