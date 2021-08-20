import React, { useEffect, useState } from 'react';
import './App.css';
import { getTempratureText, getWeatherEnum, getWeatherIcon, getWeatherText, WeatherEnum } from './WeatherUtil';

const App = () => {
  const [temp, setTemp] = useState(0);
  const [condition, setCondition] = useState<WeatherEnum>('');
  const [showHiddenOverlay, setShowHiddenOverlay] = useState<boolean>(false);

  const [customLongitude, setCustomLongitude] = useState<string>('59.4043871');
  const [customLatitude, setCustomLatitude] = useState<string>('17.9564466');
  const [customLocationName, setCustomLocationName] = useState<string>('');

  const [isInKista, setIsInKista] = useState<boolean>(true);

  useEffect(() => updateData());

  const updateData = () => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=3fc503f84c8f42b2a45111753211908&q=${customLongitude},${customLatitude}&aqi=no`).then(
      async (response) => {
        const result = await response.json();
        const currentTemp = result?.current?.temp_c;
        const currentCondition = result?.current?.condition?.text;
        const conditionEnum = getWeatherEnum(currentCondition);
        const kista = customLongitude === '59.4043871' && customLatitude === '17.9564466';
        setIsInKista(kista);
        if (!kista) {
          setCustomLocationName(result?.location?.name);
        } else {
          setCustomLocationName('');
        }
        setTemp(currentTemp);
        setCondition(conditionEnum);
      }
    );
  };

  const updateLocation = () => {
    updateData();
    setShowHiddenOverlay(false);
  };

  const showHiddenOverlayHtml = () => {
    return (
      <div className='overlay'>
        <div>
          <p>Jaha... vart i helevete är du då?</p>
          <br />
          <input type='text' value={customLatitude} onChange={(e) => setCustomLatitude(e.target.value)}></input>
          <span>Latitud</span>
          <br />
          <input type='text' value={customLongitude} onChange={(e) => setCustomLongitude(e.target.value)}></input>
          <span>Longitude</span>
          <br />
          <button onClick={updateLocation} type='button'>
            Uppdatera min position
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      {showHiddenOverlay && showHiddenOverlayHtml()}
      <div className='App App-background'>
        <img src={getWeatherIcon(condition)} className='App-logo' alt='logo' onClick={() => setShowHiddenOverlay(true)} />
        {!isInKista && <h4>Du är inte i Kista? Varför?!?</h4>}
        <p>
          Vädret är{' '}
          <b>
            <u>{getWeatherText(condition)}</u>
          </b>{' '}
          i {isInKista && 'Kista'} {!isInKista && customLocationName}.
        </p>
        <p>
          Tempraturen ligger på <i>{getTempratureText(temp)}</i>
        </p>
      </div>
    </>
  );
};

export default App;
