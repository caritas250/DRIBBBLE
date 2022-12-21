
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import DesignerFilePage from './router/Design Files';
import Dribbble from './router/Dribbble';
import FindWorkPage from './router/Find Work';
import GoProPage from './router/Go pro';
import HireDesignerPage from './router/Hire Designers';
import Home from './router/home';
import InspirationPage from './router/Inspiration';
import LearnDesignPage from './router/Learn Design';
import Login from './router/Sign in';
import Signup from './router/Sign up';
import whitesandbeach from "./router/video/whitesandbeach.mp4";

const Router = createBrowserRouter([

  {
    path:"/",
    element: <Home/>
  },
  {
    path:"/Dribbble",
    element:<Dribbble/>
  },
  {
    path: "/inspiration",
    element: <InspirationPage />
  },

  {
    path: "/Find Work",
    element: <FindWorkPage/>
  },
  {
    path:"/Go pro",
    element: <GoProPage/>
  },
  {
    path:"/Learn Design",
    element:<LearnDesignPage/>
  },
  {
    path: "/Sign up",
    element: <Signup/>
  },
  {
    path: "/Sign in",
    element: <Login/>
  },
  {
    path:"/Hire Designers",
    element:<HireDesignerPage/>
  },
  {
    path:"/Design Files",
    element:<DesignerFilePage/>
  }




])

function App() {
  

  return (
    <>
    <video className="video" autoPlay loop muted>
                <source  src={whitesandbeach} type="video/mp4" />
            </video>
    <div>
      <RouterProvider router = {Router} />
    </div>
    </>
  )
}

export default App
