import { useEffect, useState } from "react";
import { BiCoffeeTogo } from "react-icons/bi";
import { lookupWeatherByCode } from "./helpers";

type OwnProps = {
    flavor?: any;
}

type WeatherData = {
    current_weather: {
        temperature: number;
        weathercode: number;
    };
}

function Weather(props: OwnProps) {
    const [loading, setLoading] = useState(true);
    const [weather, setWeather] = useState({} as WeatherData);

    useEffect(() => {
        const getWeather = async () => {
            setLoading(true);
            await fetch("https://api.open-meteo.com/v1/forecast?latitude=42.07&longitude=-70.78&hourly=temperature_2m&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York")
                .then(response => response.json())
                .then(result => {
                    setLoading(false);
                    setWeather(result);
                });
        };

        // You need to restrict it at some point
        // This is just dummy code and should be replaced by actual
        if (Object.keys(weather).length == 0) {
            getWeather();
        }
    }, []);

    return (
        <div className="flex flex-col items-center p-1 drop-shadow-lg bg-ztan rounded-md font-Shrikhand text-3xl text-zblue">
            <div className="flex gap-3 text-3xl text-zpurple">
                <span>
                    {loading && ""}
                    {!loading && lookupWeatherByCode(weather.current_weather.weathercode).icon}
                </span>
                <span>
                    Pembroke
                </span>

            </div>
            <>
                {loading &&
                    <div>
                        Loading
                    </div>}
                {!loading &&
                    <>
                        <div>
                            {weather.current_weather.temperature}°F
                        </div>
                        <div className="text-2xl">
                            {lookupWeatherByCode(weather.current_weather.weathercode).description}
                        </div>
                    </>
                }
            </>
        </div>
    );
}

export default Weather;