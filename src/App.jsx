import { Canvas } from '@react-three/fiber'
import { Environment, Center, } from '@react-three/drei'
import { Model } from './Shirt'
import { Shadows } from './Shadows'
import { CameraRig } from './Rig'



export function App() {
    return (

        <Canvas
            shadows
            gl={{ preserveDrawingBuffer: true }}

            camera={{ position: [0, 0, 2.5], fov: [25] }}>
            <Environment preset='dawn' background blur={[0.5]} />
            <ambientLight intensity={[0.5]} />
            <CameraRig>
                <Shadows />

                <Center>
                    <Model />


                </Center>
            </CameraRig>
            {/* <ContactShadows position={[0, -0.8, 0]} color="#ffffff" /> */}
            {/* <OrbitControls /> */}
        </Canvas>

    )
}