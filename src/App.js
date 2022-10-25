import { useEffect } from 'react';
import './App.css';

const tg = window.Telegram.WebApp

function App() {

  useEffect(() => {
    tg.ready()
  }, [])

  function onClose() {
    tg.close()
  }

  return (
    <div className="App">
      work
      <button onClick={onClose}>закрыть</button>
    </div>
  )
}

export default App;
