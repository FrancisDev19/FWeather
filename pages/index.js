import Head from "next/head";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Waves from "./components/Waves";
import IsDayContext from './Context/isDay'
import {useContext} from 'react'

export default function Home() {

  const IsDay = useContext(IsDayContext);

  return (
    console.log(IsDay[0]),
        <div>
        <div className={ IsDay[0] === 1 ? "h-screen bg-yellow-500 transition-all duration-700 ease-in" : "h-screen bg-gray-800 transition duration-700 ease-in" }>
          <Head>
            <link rel="shortcut icon" href="/favicon.png" />
            <title>FWeather</title>
          </Head>
          <div className="container mx-auto px-20 text-center">
            <Navbar />
            <Searchbar />
          </div>
          <Waves />
        </div>
    </div>
  );

  
}
