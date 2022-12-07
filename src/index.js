//React imports
import React from 'react';
import ReactDOM from 'react-dom/client';
//My imports
import './index.css';
import {App} from "./App"

//To manage the index.html document
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  
  </>
);

/*
  GitHub
    Steps to upload the project to the github repository:
      1) git add .
      2) git commit -m "name of commit"
      3) git remote add origin URLOfRepository
      4) git push -u origin master

   npm

    Steps to start running the project
      1) npm start
*/
