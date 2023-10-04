

import { useSnapshot } from 'valtio'
import { state } from './store'
import { useFrame } from '@react-three/fiber'
import {
    useGLTF,

    useTexture,
    Decal
} from '@react-three/drei'
import { easing } from 'maath'
export function Model(props) {
    const snap = useSnapshot(state)
    const texture = useTexture(`/${snap.selectedDecal}.png`)
    const { nodes, materials } = useGLTF('./models/t_shirt_b.glb')
    useFrame((state, delta) =>
        easing.dampC(materials.lambert1.color, snap.selectedColor, 0.25, delta)
    )
    return (

        <mesh
            castShadow
            receiveShadow
            geometry={nodes.T_Shirt_Male.geometry} material={materials.lambert1}
            material-roughness={1}
            {...props}
            dispose={null}
        >
            <Decal
                position={[0.1, 0.49, 0.11]}
                rotation={[0, 0.1, 0]}
                scale={0.1}
                opacity={0.9}
                map={texture}
                anisotropy={16} />
        </mesh>


    )
}

useGLTF.preload('./models/t_shirt_b.glb')
