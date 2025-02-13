import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function WaveField() {
  const mesh = useRef<THREE.Mesh>(null);
  const geometry = useRef<THREE.PlaneGeometry>(null);

  // Create a plane geometry
  const planeGeometry = new THREE.PlaneGeometry(15, 15, 50, 50);
  const positions = planeGeometry.attributes.position.array;

  useFrame(({ clock }) => {
    if (geometry.current && mesh.current) {
      const time = clock.getElapsedTime();
      
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const y = positions[i + 1];
        positions[i + 2] = Math.sin(x + time) * 0.5 + Math.cos(y + time) * 0.5;
      }
      
      geometry.current.attributes.position.needsUpdate = true;
      mesh.current.rotation.z = time * 0.1;
    }
  });

  return (
    <mesh ref={mesh} rotation={[-Math.PI / 4, 0, 0]} position={[0, 0, -5]}>
      <planeGeometry ref={geometry} args={[15, 15, 50, 50]} />
      <meshStandardMaterial
        color="#3b82f6"
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}

export default WaveField;