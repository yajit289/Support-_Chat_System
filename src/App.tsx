import DashBoard from './pages/DashBoardPage'
import CreateBot from './pages/CreateBot'
import Traning from './pages/Traning'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import AppLayout from './components/AppLayout'
import './App.css'



const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <DashBoard /> },  // "/"
      { path: "create", element: <CreateBot /> }, // "/create"
      { path: "train", element: <Traning /> },   // "/train"
    ],
  },
])

function App() {

  return (
    <>
         <RouterProvider router={router} />

    </>
    )
}

export default App
