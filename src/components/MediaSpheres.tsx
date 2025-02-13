import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function MediaSpheres() {
  const group = useRef<THREE.Group>(null);
  const sphereCount = 12;
  const radius = 3;

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = clock.getElapsedTime() * 0.2;
      group.current.children.forEach((sphere, i) => {
        const offset = i * (Math.PI * 2) / sphereCount;
        sphere.position.y = Math.sin(clock.getElapsedTime() + offset) * 0.5;
      });
    }
  });

  return (
    <group ref={group}>
      {Array.from({ length: sphereCount }).map((_, i) => {
        const angle = (i / sphereCount) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        return (
          <mesh key={i} position={[x, 0, z]}>
            <sphereGeometry args={[0.2, 16, 16]} />
            <meshStandardMaterial
              color="#a855f7"
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export default MediaSpheres;