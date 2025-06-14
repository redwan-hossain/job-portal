import axios from 'axios';
import React from 'react';
import { Link, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id: jobId } = useParams();
    const { user } = useAuth();

    const handleApplyFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;

        console.log(linkedin, github, resume);

        const applicants = {
            jobId,
            applicant: user.email,
            linkedin,
            github,
            resume
        }

        axios.post('http://localhost:5000/applications', applicants)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Application has been submitted",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error)
            })

    }
    return (
        <div>
            <h3 className="text-4xl">Apply for this job: <Link to={`/jobs/${jobId}`}>Details</Link></h3>

            <form onSubmit={handleApplyFormSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                    <label className="label">LinkedIn Link</label>
                    <input type="url" name='linkedin' className="input" placeholder="Linkedin Link" />

                    <label className="label">Github Link</label>
                    <input type="url" name='github' className="input" placeholder="Github Link" />

                    <label className="label">Resume Link</label>
                    <input type="url" name='resume' className="input" placeholder="Resume Link" />

                    <input type="submit" className='btn' value="Apply Now" />
                </fieldset>
            </form>

        </div>
    );
};

export default JobApply;