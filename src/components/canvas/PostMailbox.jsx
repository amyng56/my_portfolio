import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Mailbox = () => {
  const mailbox = useGLTF('./public_mail_box/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={2} />
      <pointLight intensity={1} />
      <primitive
        object={mailbox.scene}
        scale={0.035}
        position-y={-2}
        rotation-y={0}
      />
    </mesh>
  )
}

const MailboxCanvas = ({ icon }) => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={true}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Mailbox />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default MailboxCanvas;