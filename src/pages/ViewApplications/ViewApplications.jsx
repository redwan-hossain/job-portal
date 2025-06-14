import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const ViewApplications = () => {
    const { job_id } = useParams();
    const applications = useLoaderData();
    return (
        <div>
            <h4 className="text-4xl">{applications.length}application for: {job_id}</h4>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                      {
                        applications.map(application =>   <tr key={application._id}>
                            <th>1</th>
                            <td>{application.applicant}</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>)
                      }
                     
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ViewApplications;