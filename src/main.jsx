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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/featureJob',
        loader:()=> fetch('/jobs.json'),
        element:<FeatureJobs></FeatureJobs>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
