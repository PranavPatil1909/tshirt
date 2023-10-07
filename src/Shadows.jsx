import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'

export function Shadows() {
    const shadows = useRef()
    useFrame((state, delta) =>
        easing.dampC(
            shadows.current.getMesh().material.color,
            state.selectedColor,
            0.25,
            delta
        )
    )
    console.log('hello')
    return (
        <AccumulativeShadows
            ref={shadows}
            temporal
            frames={60}
            alphaTest={0.99}
            scale={4}
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, 0, -0.18]}
        >
            <RandomizedLight
                amount={4}
                radius={5}
                intensity={0.35}
                ambient={0.45}
                position={[-8, 2, -11]}
            />
            <RandomizedLight
                amount={4}
                radius={5}
                intensity={0.35}
                ambient={0.45}
                position={[8, 2, -11]}
            />
            
        </AccumulativeShadows>
    )

}