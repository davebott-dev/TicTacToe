import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Gameboard from './routes/Gameboard.jsx';
import Root from './Root.jsx';
import Index from './routes/Index.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root/>,
    children: [
      {
        index:true,
        element: <Index/>,
      },
      {
        path: '/game-start',
        element: <Gameboard/>,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
