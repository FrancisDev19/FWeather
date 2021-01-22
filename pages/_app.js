import '../styles/globals.css'
import '../styles/waves.css'
import IsDay from './Context/isDay'
import {useState} from 'react'

function MyApp({ Component, pageProps }) {

  const [isDay, setIsDay] = useState(0);

  return (
    <IsDay.Provider value={[isDay, setIsDay]} >
      <Component {...pageProps} />
    </IsDay.Provider>
  )
}

export default MyApp
