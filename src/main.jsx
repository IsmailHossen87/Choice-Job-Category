import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx/Home.jsx';
import Roots from './Components/Roots/Roots.jsx';
import FeatureJobs from './Components/FeatureJob/FeatureJobs.jsx';
import Jobdetails from './Components/JobDetails/Jobdetails.jsx';
import Error from './Components/Error/Error.jsx';
import PendingJob from './Components/PendingJobs/PendingJob.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/featureJob',
        element:<FeatureJobs></FeatureJobs>
      },
      {
        path:'/jobsdetails/:jobDeatils',
        loader:()=> fetch('./jobs.json'),
        element:<Jobdetails></Jobdetails>
      },
      {
        path:'/ListedJobs',
        loader:()=> fetch('/jobs.json'),
        element:<PendingJob></PendingJob>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
