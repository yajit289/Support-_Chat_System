import DashBoardPage from './pages/DashBoardPage'
import CreateBotPage from './pages/CreateBotPage'
import TraningPage from './pages/TraningPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import AppLayout from './components/AppLayout'
import './App.css'
import ChatBotListPage from './pages/ChatBotListPage'



const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <DashBoardPage /> },  // "/"
      { path: "create", element: <CreateBotPage /> }, // "/create"
      { path: "train", element: <TraningPage /> },   // "/train"
      { path: "list", element: <ChatBotListPage></ChatBotListPage> }   // "/list"
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
