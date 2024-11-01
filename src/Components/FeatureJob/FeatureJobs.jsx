import React from "react";
import { useLoaderData } from "react-router-dom";
import Jobtitle from "../JobTitle/Jobtitle";

const FeatureJobs = () => {
  const jobs = useLoaderData();
  return (
    <div className='container mx-auto my-5 grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
     {
        jobs.map(data => <Jobtitle data={data}></Jobtitle>)
     }
    </div>
  );
};

export default FeatureJobs;
