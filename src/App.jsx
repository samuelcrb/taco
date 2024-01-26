import './App.css'

import { Canvas } from '@react-three/fiber'
import XrCube from './Components/XrCube'
import { ARButton, XR } from '@react-three/xr'

function App() {


  return (

    <> 
      <ARButton/>
      <Canvas>
        <XR>
          <XrCube/> 
        </XR>
      </Canvas>
    </>
  )
}

export default App
