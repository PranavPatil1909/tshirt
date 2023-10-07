import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'

export function Backdrop() {
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
            alphaTest={0.65}
            scale={10}
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, 0, -0.14]}>
            <RandomizedLight
                amount={4}
                radius={5}
                intensity={0.25}
                ambient={0.55}
                position={[-5, 5, -9]}
            />
            <RandomizedLight
                amount={4}
                radius={5}
                intensity={0.25}
                ambient={0.55}
                position={[5, 5, -9]}
            />
        </AccumulativeShadows>
    )
}