import React, { use } from 'react';

const ApplicationList = ({ MyApplicationsPromise }) => {

    const applications = use(MyApplicationsPromise)

    return (
        <div>
            <h3 className="text-3xl">Jobs Applied so far: {applications.length}</h3>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                      
                      {
                        applications.map(applicant =>   <tr key={applicant._id}>
                            <th>1</th>
                            <td>{applicant.title}</td>
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

export default ApplicationList;