import React, { use } from 'react';
import { AuthContext } from '../contexts/Authcontext/Authcontext';

const useAuth = () => {
    const authInfo = use(AuthContext);
    return authInfo;
};

export default useAuth;