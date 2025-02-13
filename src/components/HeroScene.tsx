import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

function FloatingCube() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(state.clock.getElapsedTime()) * 0.2;
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={1.5}
      floatIntensity={2}
    >
      <mesh ref={mesh} position={[-2, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#3b82f6"
          metalness={0.6}
          roughness={0.1}
          emissive="#3b82f6"
          emissiveIntensity={0.5}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function FloatingSphere() {
  return (
    <Float
      speed={1.5}
      rotationIntensity={1.5}
      floatIntensity={2}
    >
      <mesh position={[2, 1, 0]}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial
          color="#8b5cf6"
          metalness={0.4}
          roughness={0.2}
          emissive="#8b5cf6"
          emissiveIntensity={0.4}
        />
      </mesh>
    </Float>
  );
}

function FloatingTorus() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.getElapsedTime() * 0.5;
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={1.5}
      floatIntensity={2}
    >
      <mesh ref={mesh} position={[0, -1, 0]}>
        <torusGeometry args={[0.8, 0.2, 32, 100]} />
        <meshStandardMaterial
          color="#ec4899"
          metalness={0.6}
          roughness={0.1}
          emissive="#ec4899"
          emissiveIntensity={0.4}
        />
      </mesh>
    </Float>
  );
}

function FloatingOctahedron() {
  return (
    <Float
      speed={1.5}
      rotationIntensity={1.5}
      floatIntensity={2}
    >
      <mesh position={[-2, -1.5, 0]}>
        <octahedronGeometry args={[0.7]} />
        <meshStandardMaterial
          color="#10b981"
          metalness={0.6}
          roughness={0.1}
          emissive="#10b981"
          emissiveIntensity={0.5}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function GlowingSpheres() {
  return (
    <group>
      {[...Array(20)].map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
          ]}
        >
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={1}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function HeroScene() {
  return (
    <>
      <color attach="background" args={['#000000']} />
      <fog attach="fog" args={['#000000', 5, 15]} />
      
      <ambientLight intensity={0.8} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
      />
      <pointLight position={[-10, -10, -10]} intensity={1} />
      <pointLight position={[0, 0, 5]} intensity={0.5} />
      
      <GlowingSpheres />
      <FloatingCube />
      <FloatingSphere />
      <FloatingTorus />
      <FloatingOctahedron />

      <Center position={[0, 0, -1]}>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.8}
          height={0.2}
          curveSegments={32}
          bevelEnabled
          bevelThickness={0.05}
          bevelSize={0.04}
          bevelOffset={0}
          bevelSegments={5}
        >
          TRIOPULSE
          <meshStandardMaterial 
            color="#ff3e00"
            metalness={0.7}
            roughness={0.1}
            emissive="#ff3e00"
            emissiveIntensity={0.4}
          />
        </Text3D>
      </Center>
    </>
  );
}