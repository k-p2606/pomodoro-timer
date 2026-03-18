// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Settings from './settings';
import Timer from "./Timer"
import settingsContext from './settingsContext';


function App() {
  
  const [showSettings, setShowSettings] = useState(true);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <main>
      <settingsContext.Provider value ={{
        workMinutes, breakMinutes, setWorkMinutes, setBreakMinutes,
      }}>
        {showSettings ? <Settings /> :  <Timer />}
      </settingsContext.Provider>
      
    </main>
  );
}

export default App;
