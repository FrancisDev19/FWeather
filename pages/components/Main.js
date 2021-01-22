import React from 'react'

const Main = ({name, country, text, icon, humidity, pressure, speed, temperature}) => {
    return (
                <div>
                    <h2 className="text-white mb-3 text-2xl font-semibold tracking-wider"> {name}, {country} </h2>
                    <h6 className="text-gray-300 text-lg mb-3"> {text} </h6>
                    <p className="text-white text-8xl"> {temperature}°C </p>
                    <img src={ text === "Sunny" ? "/weather/040-sunrise.svg" : `${icon}` } alt="" className="mx-auto w-40 h-40 mb-10"/>
                
                    <div className="grid grid-cols-3 gap-4">
                        <div className="humidity">
                            <h6 className="text-white mb-3 text-2xl font-semibold tracking-wider">Humidity</h6>
                            <p className="text-gray-300 text-lg"> {humidity} %</p>
                        </div>
                        <div className="pressure">
                            <h6 className="text-white mb-3 text-2xl font-semibold tracking-wider">Pressure</h6>
                            <p className="text-gray-300 text-lg"> {pressure} mBar</p>
                        </div>
                        <div className="speed">
                            <h6 className="text-white mb-3 text-2xl font-semibold tracking-wider">Speed</h6>
                            <p className="text-gray-300 text-lg">{speed} km/h</p>
                        </div>
                    </div>
                </div>
    )
}

export default Main
