import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreData } from "../utilities/addTodb";
import Jobdetails from "../JobDetails/Jobdetails";
import Jobtitle from "../JobTitle/Jobtitle";

const PendingJob = () => {
  const Alldata = useLoaderData();
  const [joblist, setJoblist] = useState([]);
  const [sort,setSort] = useState('')


  useEffect(() => {
    const storelist = getStoreData();
    // console.log(storelist,Alldata)
    const job = Alldata.filter((job) => storelist.includes(job.id));
    setJoblist(job);
  }, []);
 

  return (
    <div className="container mx-auto">
      <details className="dropdown">
        <summary className="btn m-1">Sort By</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li>
            <a>Rating</a>
          </li>
          <li>
            <a>No of Pages</a>
          </li>
        </ul>
      </details>
      <Tabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-4 gap-3">
            {joblist.map((job) => (
              <Jobtitle data={job}></Jobtitle>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default PendingJob;
