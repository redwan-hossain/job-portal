import React, { Suspense, } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import useAuth from '../../hooks/useAuth';
import { MyApplicationsPromise } from '../../api/applicationApi';


const MyApplication = () => {
    
    const {user} = useAuth();

    return (
        <div>
            <ApplicationStats></ApplicationStats>
            <Suspense fallback = {'loading your applications'}>
                <ApplicationList MyApplicationsPromise ={MyApplicationsPromise(user.email)}></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplication;