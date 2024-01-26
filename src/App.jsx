import './App.css'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Webcam from "react-webcam";

function App() {


  return (
    <>
      <Canvas>
        
        <OrbitControls/>
        <ambientLight/>
        <mesh>
          <boxGeometry/>
          <meshStandardMaterial color={"mediumpurple"}></meshStandardMaterial>
        </mesh>
      </Canvas>
    </>
  )
}

export default App
