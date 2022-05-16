import React, { Suspense } from 'react';
import './App.scss';
import Box from './components/Box';
import Sphere from './components/AnimatedSphere';
import { OrbitControls } from '@react-three/drei';
import {Canvas} from '@react-three/fiber';

function App() {
  return (
    <div className="app">
      <Canvas className='app__canvas'>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
        <Box />
        </Suspense>
      </Canvas>
      <Canvas className='app__canvas'>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
        <Sphere />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
