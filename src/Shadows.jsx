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
    return (
        <AccumulativeShadows
            ref={shadows}
            temporal
            frames={60}
            alphaTest={0.85}
            scale={1}
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, 0, -0.18]}
        >
            {/* <RandomizedLight
                amount={4}
                radius={9}
                intensity={0.55}
                ambient={0.25}
                position={[5, 5, -10]}
            />
            <RandomizedLight
                amount={4}
                radius={5}
                intensity={0.25}
                ambient={0.55}
                position={[-5, 5, -9]}
            /> */}
            <RandomizedLight
                amount={4}
                radius={6}
                intensity={0.55}
                ambient={0.85}
                position={[5, 5, -10]}
            />
            <RandomizedLight
                amount={4}
                radius={6}
                intensity={0.55}
                ambient={0.85}
                position={[-5, 5, -9]}
            />
           
        </AccumulativeShadows>
    )

}