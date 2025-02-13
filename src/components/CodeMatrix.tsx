import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function CodeMatrix() {
  const points = useRef<THREE.Points>(null);
  const particleCount = 1000;
  const gridSize = 5;

  // Create grid-aligned particles
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.floor(Math.random() * gridSize) - gridSize/2) * 2;
    positions[i * 3 + 1] = (Math.floor(Math.random() * gridSize) - gridSize/2) * 2;
    positions[i * 3 + 2] = (Math.floor(Math.random() * gridSize) - gridSize/2) * 2;

    const green = 0.5 + Math.random() * 0.5;
    colors[i * 3] = 0.2;
    colors[i * 3 + 1] = green;
    colors[i * 3 + 2] = 0.2;
  }

  useFrame(({ clock }) => {
    if (points.current) {
      const time = clock.getElapsedTime();
      points.current.rotation.y = time * 0.2;
      points.current.position.y = Math.sin(time * 0.5) * 0.5;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation={true}
      />
    </points>
  );
}

export default CodeMatrix;