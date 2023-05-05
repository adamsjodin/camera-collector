import './App.scss'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import StartPage from './Pages/StartPage'
import MyCameras from './Pages/MyCameras'
import CameraInfo from './Pages/CameraInfo'
import AddCameras from './Pages/AddCameras'
import ErrorPage from './Pages/ErrorPage'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/camerainfo/:id' element={<CameraInfo />} />
        <Route path='/mycameras' element={<MyCameras />} />
        <Route path='/addcameras' element={<AddCameras />} />
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
