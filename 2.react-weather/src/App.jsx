import loader from './assets/loader.svg';
import './App.css';
import { useEffect, useState } from "react";
import browserIcon from "./assets/browser.svg"; // Importer le fichier SVG directement

const APIKEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
    const [weatherData, setWeatherData] = useState(null);
    const [errorinfo, setErrorinfo] = useState(null);

    useEffect(() => {
        fetch(`http://api.airvisual.com/v2/nearest_city?key=${APIKEY}`)
            .then((response) => response.json())
            .then((responseData) => {
                setWeatherData({
                    city: responseData.data.city,
                    country: responseData.data.country,
                    iconId: responseData.data.current.weather.ic,
                    temperature: responseData.data.current.weather.tp,
                });
            })
            .catch((error) => {
                setErrorinfo({ msg: error.message });
            });
    }, []);

    return (
        <main>
            <div className={`loader-container ${!weatherData && 'active'}`}>
                <img src={loader} alt="loader icon"/>
            </div>
            {weatherData && (
                <>
                    <p className="city-name">{weatherData.city}</p>
                    <p className="country-name">{weatherData.country}</p>
                    <p className="temperature">{weatherData.temperature}°</p>
                    <p className="info-icon-container">
                        <img src={`/icons/${weatherData.iconId}.svg`} alt="weather icon"/>
                    </p>
                </>
            )}
            {errorinfo && !weatherData && (
                <>
                    <p className="error-information">{errorinfo.msg}</p>
                    <img src={browserIcon} alt="browser icon" /> {/* Utiliser le fichier SVG comme source d'image */}
                </>
            )}
        </main>
    );
}

export default App;
