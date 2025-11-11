import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Particles() {
  const ref = useRef<THREE.Points>(null!);
  const count = 2000;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
  }

  useFrame((state: any) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime / 4) / 2;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime / 2) / 2;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00ff88"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

const ThreeScene: React.FC = () => {
  return (
    <div className="three-scene">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Particles />
      </Canvas>
    </div>
  );
};

export default ThreeScene;