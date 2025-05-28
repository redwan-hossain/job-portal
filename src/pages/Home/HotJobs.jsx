import React, { use } from 'react';
import JobCard from '../Shared/JobCard';



const HotJobs = ({jobPromise}) => {

    const jobs = use(jobPromise)  

    return (
        <div>
            {jobs.length}

            <h2 className="text-4xl text-center">Hot Job for you</h2>

            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    jobs.map(job => <JobCard key={job._id} job = {job}></JobCard>)
                }
            </div>

            
        </div>
    )
};

export default HotJobs;