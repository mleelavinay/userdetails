import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from "./login/login"
import reportWebVitals from './reportWebVitals';
import "antd/dist/reset.css";
import UserDetailsForm from './component/userDetails/add-edit-userDetails';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./utils/protectedRoute"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={ <ProtectedRoute><UserDetailsForm /> </ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
