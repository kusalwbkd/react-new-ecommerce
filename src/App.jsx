import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About, Cart, Checkout, Error, Home, Landing, PrivateRoute, ProductsPage, SingleProduct } from './pages';
import { Navbar } from './components';


const router=createBrowserRouter([

 
  {
    path:'/',
    element:<Home/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Landing/>,

      },
      {
        path:'products',
        element:<ProductsPage/>,
      },
      {
        path:'products/:id',
        element:<SingleProduct/>
      },
      
        {
          path:'cart',
          element:<Cart/>,
         
        },
        {
          path:'about',
          element:<About/>,
          
          
        },
        {
          path:'checkout',
          element:<PrivateRoute>
            <Checkout/>
          </PrivateRoute>,
          
        }
      
    ]
  }
])


const App = () => {
  return (
    
   
     <RouterProvider router={router}/>
    
   
  )
}

export default App