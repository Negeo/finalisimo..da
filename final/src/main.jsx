import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import cajitas from './data/cajitas.js'
import CajitasView from './views/CajitasView.jsx'

const rutas = [
  {path: "/",element: <App />,},

]
cajitas.forEach((cajita) => {
  rutas.push({
    path: cajita.titulo,
    element: <CajitasView cajita={cajita}/>
  })
})

const router = createBrowserRouter(rutas)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={(router)} />
  </React.StrictMode>,
)
