import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Jobtitle from "../JobTitle/Jobtitle";

const FeatureJobs = () => {
  const [jobs,setjobs] = useState([])
  useEffect(()=>{
    fetch('/jobs.json')
    .then(res => res.json())
    .then(data => setjobs(data))
  },[])
  // const jobs = useLoaderData();
  return (
    <div className='container mx-auto my-5 grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
     {
        jobs.map(data => <Jobtitle data={data}></Jobtitle>)
     }
    </div>
  );
};

export default FeatureJobs;
