import React from 'react';
import ReactDOM  from 'react-dom/client';

import App from './App';

import {
  BrowserRouter
} from "react-router-dom";

import './index.css';


const Index = () => {
  return (
    <>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </>
  )
}

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(<Index/>);