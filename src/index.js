import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios'
import setAuthorizationToken from "./setAuthorizationToken";

setAuthorizationToken(localStorage.token)
axios.defaults.baseURL = `http://test.ansppb.an.gov.ng/api/`

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') 
);


