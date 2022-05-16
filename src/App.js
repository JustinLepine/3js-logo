import './App.css';
import Box from './components/Box';

import {Canvas} from '@react-three/fiber';

function App() {
  return (
    <div className="App">
      <Canvas>
        <Box/>
      </Canvas>
    </div>
  );
}

export default App;
