import React, { useRef } from 'react';
import './App.scss';
import { Canvas, useFrame } from "react-three-fiber";
// import { Box } from "drei";
import * as THREE from "three";
import { Vector3, Mesh } from 'three';
const Box  = (props: { position: Vector3 }) => {
  const refMesh = useRef<Mesh>(null);

  useFrame(() => {
    if (refMesh.current) {
      // rotates the object
      return refMesh.current.rotation.y = refMesh.current.rotation.x += 0.01;
    }
  });
  return (
    <mesh ref={refMesh}  scale={[1,1,1]}position={props.position}>
      <boxBufferGeometry attach="geometry" args={[1,1,1]} />
      <meshStandardMaterial attach="material" color="blue" />
    </mesh>
  );
};

function App() {
  return (
    <>
      <Canvas camera={{position: [-5,2,10], fov: 60}}>
        <ambientLight intensity={0.3}  />
        <Box position={new THREE.Vector3(0, 0, 0)} ></Box>
        <Box position={new THREE.Vector3(-4, 0, 0)} ></Box>
        <Box position={new THREE.Vector3(4, 0, 0)}></Box>
      </Canvas>
    </>
  );
}

export default App;
