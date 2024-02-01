import Togglebtn from './component/Togglebtn';
import Card from './component/Card';
import './App.css';
import { useEffect, useState } from 'react';
import { ThemeProvider } from './Context/Themecontext';

function App() {
  const [themeMode,setThemeMode]=useState("light")
// actual change in theme

useEffect(()=>{
  document.querySelector('html').classList.remove('light','dark')
  document.querySelector('html').classList.add(themeMode)
},[themeMode])

const lightTheme=()=>{
  setThemeMode('light')
}
const darkTheme=()=>{
  setThemeMode('dark')
}
  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
    <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Togglebtn />
        </div>

        <div className="w-full max-w-sm mx-auto">
            <Card />
        </div>
    </div>
</div>
</ThemeProvider>
  );
}

export default App;
