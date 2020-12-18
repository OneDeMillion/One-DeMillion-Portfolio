import Auth from './auth.js';
import {makeRequest} from './authHelpers.js';

makeRequest('login', 'POST', {
    password: 'user1',
    email: 'user1@email.com'
    });
    
// if a token was passed in we should send it on.
if (token) {
    options.headers.Authorization = `Bearer ${token}`;
  }