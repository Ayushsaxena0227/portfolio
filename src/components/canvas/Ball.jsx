import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const ballRef = useRef();

  // Floating effect (customized for smooth motion)
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ballRef.current.position.y = Math.sin(t * 1.5) * 0.2; // Smooth floating
    ballRef.current.rotation.y += 0.01; // Continuous rotation
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2.5}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 0.1]} />
      <mesh ref={ballRef} castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="always" // Ensures animation is continuous
      shadows
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enablePan={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
