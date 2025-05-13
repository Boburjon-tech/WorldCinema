import React from 'react'
import { RouterProvider,createBrowserRouter,Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { About, Films, Genres, Home } from './pages';
import AddFilm from './pages/addFilm/addFilm';


function App() {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children : [
        {index : true, element : <Home/>},
        {path : "/films",element : <Films/>},
        {path : "/about",element : <About/>},
        {path : "/genres",element : <Genres/>},
        {path : "/addfilm",element : <AddFilm/>}
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App 
