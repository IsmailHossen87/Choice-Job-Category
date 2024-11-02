import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addStoreList } from "../utilities/addTodb";

const Jobdetails = () => {
  const { jobDeatils } = useParams();
  const newId = parseInt(jobDeatils);
  const data = useLoaderData();
  const job = data.find((job) => job.id === newId);
//   data save lcal server
  const handleJob = (id)=>{
    addStoreList(id)
  }

  const {
    job_description,
    job_type,
    location,
    remote_or_onsite,
    logo,
    id,
    company_name,
  } = job;

  return (
    <div className="">
      <div className="card bg-base-100 w-96 my-6 border container mx-auto">
        <figure>
          <img className="my-3" src={logo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl font-bold">CompanyName  :  {company_name}</h2>
          <div className="text-xl font-semibold">
            <p> Location : {location}</p>
            <p>Job-Type : {job_type}</p>
          </div>
          <h3 className="text-2xl font-bold">
            Remote of Outside : {remote_or_onsite}
          </h3>
          <h3>{job_description}</h3>
          <button onClick={()=> handleJob(newId)} className='btn btn-primary'>Confirm the Job</button>
        </div>
      </div>
    </div>
  );
};

export default Jobdetails;
