import { OrbitControls } from '@react-three/drei'

const XrCube = () => {
    return (
        <>
        <OrbitControls/>
        <ambientLight/>
            <mesh position-z={-5}>
            <boxGeometry args={[2,2,2]}/>
            <meshStandardMaterial color={"mediumpurple"}></meshStandardMaterial>
            </mesh>
        </>
    )
}

export default XrCube