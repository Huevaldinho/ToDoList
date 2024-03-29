//React imports
import React from "react";
import ReactDOM from "react-dom/client";
//My imports
import "./styles/index.css";
import { App } from "./components/App.jsx";

//To manage the index.html document
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App
      tasks={
        [
          {
            taskName: "Homework",
            descripcion: "complete last 3 exercises",
            dateTime: "07/12/2022, 04:55:00",
            status: true,
          },
        ]
      }
    />
    {
    /*
    tasks={
        [
          {
            taskName: string,
            descripcion: string,
            dateTime: string,
            status: bool,
          },
        ]
      }
    
    
    
    */}
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
