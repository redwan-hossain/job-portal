import React, { Suspense } from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';

const jobPromise = fetch('http://localhost:3000/jobs').then(res => res.json());
const Home = () => {

  return (
    <div>
      <Banner></Banner>
      <Suspense fallback ={'loading job for you'}>
        <HotJobs jobPromise={jobPromise}></HotJobs>
      </Suspense>
    </div>
  );
};

export default Home;