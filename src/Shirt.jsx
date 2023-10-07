import {
    useGLTF,
    useTexture,
    Decal,
    PerspectiveCamera
} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

import { useSnapshot } from 'valtio'
import { state } from './store'
import { easing } from 'maath'


export function Shirt(props) {
    const snap = useSnapshot(state);

    const texture = useTexture(`/${snap.selectedDecal}.png`);
    const { nodes, materials } = useGLTF('https://models-kosoku-3d.s3.ap-south-1.amazonaws.com/Duck.glb')
    useFrame((state, delta) =>
        easing.dampC(materials['blinn3-fx'].color, snap.selectedColor, 0.25, delta)
    );
    return (
        <group {...props} dispose={null}>
            <group scale={0.01}>
                <PerspectiveCamera makeDefault={false} far={10000} near={1} fov={37.849} position={[400.113, 463.264, -431.078]} rotation={[-2.314, 0.566, 2.614]} />
                <mesh dispose={null}
                    geometry={nodes.LOD3spShape.geometry} material={materials['blinn3-fx']}
                    material-roughness={1}
                />
            </group>
        </group>)

} useGLTF.preload(
    'https://models-kosoku-3d.s3.ap-south-1.amazonaws.com/Duck.glb'
);
['/react.png', '/three2.png', '/pmndrs.png'].forEach(useTexture.preload);