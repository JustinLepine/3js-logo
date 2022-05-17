import React, { Suspense } from 'react';
import './App.scss';
import Box from './components/Box/Box';
import Sphere from './components/Sphere/AnimatedSphere';
import Hero from './components/Hero';
import { OrbitControls, PresentationControls } from '@react-three/drei';
import {Canvas} from '@react-three/fiber';

function App() {
  return (
    <div className="app">
      <Canvas className='app__canvas'>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={ 0.5 } />
        <directionalLight position={ [ -2, 5, 2 ] } intensity={ 1 } />
        <Suspense fallback={null}>
        <Hero />
        <PresentationControls
           global={false} // Spin globally or by dragging the model
           cursor={true} // Whether to toggle cursor style on drag
           snap={false} // Snap-back to center (can also be a spring config)
           speed={1} // Speed factor
           zoom={1} // Zoom factor when half the polar-max is reached
           rotation={[0, 0, 0]} // Default rotation
           polar={[0, Math.PI / 2]} // Vertical limits
           azimuth={[-Infinity, Infinity]} // Horizontal limits
           config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
         />
        </Suspense>
      </Canvas>
      <Canvas className='app__canvas'>
        <OrbitControls enableZoom={ false } />
        <ambientLight intensity={ 0.5 } />
        <directionalLight position={ [ -2, 5, 2 ] } intensity={ 1 } />
        <Suspense fallback={ null }>
        <Box />
        </Suspense>
      </Canvas>
      <Canvas className='app__canvas'>
        <OrbitControls enableZoom={false} enableRotate={ false } />
        <ambientLight intensity={ 0.5 } />
        <directionalLight position={ [ -2, 5, 2 ] } intensity={ 1 } />
        <Suspense fallback={ null }>
        <Sphere />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
