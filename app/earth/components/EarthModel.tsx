'use client';
import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const EarthModel = () => {
  // Load the GLTF model using useGLTF hook
  const { scene } = useGLTF('/models/earth.glb'); // Ensure the path is correct
  const modelRef = useRef<any>();

  // Rotate the model for a dynamic effect
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={2} />;
};

// By default, useGLTF.preload will preload the model
useGLTF.preload('/models/earth.glb');

export default EarthModel;
