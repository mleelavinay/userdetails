import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute  = ({ children }) => {

    const authenticated = localStorage.getItem(`authenticated`)

    return authenticated ? children : <Navigate to="/" />
};

export default ProtectedRoute;
