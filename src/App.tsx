import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <ToastContainer pauseOnFocusLoss={false} theme="colored" />
      <RouterProvider router={router} />
    </>
  )
}

export default App