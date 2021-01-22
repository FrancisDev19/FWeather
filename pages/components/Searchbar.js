import React, {useState, useEffect, useContext} from 'react'
import Main from './Main'
import IsDayContext from '../Context/isDay'

const Searchbar = () => {

    const setIsDay = useContext(IsDayContext);
    const handleSetDay = setIsDay[1];

    const [Location, setLocation] = useState('China');

    const api = '6057a1679b97483d96b210009202411';
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [text, setText] = useState('');
    const [icon, setIcon] = useState('');
    const [humidity, setHumidity] = useState('');
    const [pressure, setPressure] = useState('');
    const [speed, setSpeed] = useState('');
    const [temperature, setTemperature] = useState('');

    useEffect(() => {
        getWeather(Location);
    }, []);

    const handleChange = async (event) => {
        setLocation(event.target.value);
        event.target.value.length > 2 && await getWeather(event.target.value) 
    }

    const getWeather = async (localLocation) => {
        
        fetch(`http://api.weatherapi.com/v1/current.json?key=${api}&q=${localLocation}`)
        .then(res => res.json() )
        .then(data => {
            console.log(data);
            setName(data.location.name);
            setCountry(data.location.country);
            setText(data.current.condition.text);
            setIcon(data.current.condition.icon);
            setHumidity(data.current.humidity);
            setPressure(data.current.pressure_mb);
            setSpeed(data.current.wind_kph);
            setTemperature(data.current.feelslike_c);
            handleSetDay(data.current.is_day);
        })
        .catch(e => console.log(e))
    }

    return (
        <div>
            <input type="text" value={Location} onChange={handleChange} placeholder="location" className="w-full sm:w-3/4 my-10 px-10 py-3 text-gray-900 rounded-md shadow-lg outline-none focus:ring"/>
            <Main name={name} country={country} text={text} icon={icon} humidity={humidity} pressure={pressure} speed={speed} temperature={temperature} />
        </div>
        )
}

export default Searchbar
