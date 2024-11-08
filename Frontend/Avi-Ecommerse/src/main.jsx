import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import router from './routes/router.jsx'
import { RouterProvider } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import {Provider} from 'react-redux'
import { store } from './redux/store.jsx'
createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
      <RouterProvider router={router} />

  </Provider>
)
