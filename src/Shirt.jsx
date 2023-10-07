import {
    useGLTF,
    useTexture,
    Decal,
} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

import { useSnapshot } from 'valtio'
import { state } from './store'
import { easing } from 'maath'


export function Shirt(props) {
    const snap = useSnapshot(state);

    const texture = useTexture(`/${snap.selectedDecal}.png`);
    useFrame((state, delta) =>
        easing.dampC(materials.lambert1.color, snap.selectedColor, 0.25, delta)
    );
    const { nodes, materials } = useGLTF('https://models-kosoku-3d.s3.ap-south-1.amazonaws.com/t_shirt_b.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                geometry={nodes.T_Shirt_Male.geometry} material={materials.lambert1} >
                <Decal
                    position={[0.1, 0.49, 0.1]}
                    rotation={[0, 0, 0]}
                    scale={0.095}
                    opacity={0.5}
                    map={texture}
                    anisotropy={16}
                />
            </mesh>
        </group>
    )
}

useGLTF.preload('https://models-kosoku-3d.s3.ap-south-1.amazonaws.com/t_shirt_b.glb'

);
['/react.png', '/three2.png', '/pmndrs.png'].forEach(useTexture.preload);