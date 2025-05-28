import React, { use } from 'react';
import { AuthContext } from '../contexts/Authcontext/Authcontext';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user } = use(AuthContext);

    if (!user) {
        return <Navigate to='/signin'></Navigate>
    }

    return children;
};

export default PrivateRoute;