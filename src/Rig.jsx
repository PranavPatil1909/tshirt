import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import { state } from './store'

export function CameraRig({ children }) {
    const group = useRef()

    const snap = useSnapshot(state)

    useFrame((state, delta) => {
        easing.damp3(
            state.camera.position,
            [snap.intro ? -state.viewport.width / 3 : 0, 0, 5],
            0.25,
            delta
        )
        easing.dampE(
            group.current.rotation,
            [state.pointer.y / 10, -state.pointer.x / 5, 0],
            0.25,
            delta
        )
    })
    return <group ref={group}>{children}</group>
}