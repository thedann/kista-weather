import cloudyLogo from './icon/cloudy.png';
import rainLogo from './icon/rain.png';
import sunLogo from './icon/sun.png';
import thunderLogo from './icon/thunder.png';
import snowLogo from './icon/snow.png';

export type WeatherEnum = 'sunny' | 'thunder' | 'rain' | 'snow' | 'cloudy' | 'unkown' | '';

export const stringContains = (input: string, contains: string) => input.indexOf(contains) !== -1;

export const getWeatherEnum = (cond: string): WeatherEnum => {
  if (stringContains(cond, 'sunny')) {
    return 'sunny';
  } else if (stringContains(cond, 'thunder')) {
    return 'thunder';
  } else if (stringContains(cond, 'rain')) {
    return 'rain';
  } else if (stringContains(cond, 'snow')) {
    return 'snow';
  } else if (stringContains(cond, 'cloudy')) {
    return 'cloudy';
  }
  return 'unkown';
};

export const getWeatherText = (condi: WeatherEnum) => {
  let result = '';
  switch (condi) {
    case 'cloudy':
      result = 'anonymt molnigt skit trist skit väder';
      break;
    case 'rain':
      result = 'regnigt som satan';

      break;
    case 'snow':
      result = 'snöigt som i Johannesburg';

      break;
    case 'sunny':
      result = 'äcklig pervers jävla sol';

      break;
    case 'thunder':
      result = 'blixter och dunder, röviga under';

      break;
    case 'unkown':
      result = 'ja säg det.... GÖR DET!!';

      break;

    default:
      break;
  }
  return result;
};

export const getWeatherIcon = (condi: WeatherEnum) => {
  switch (condi) {
    case 'cloudy':
      return cloudyLogo;
    case 'rain':
      return rainLogo;
    case 'snow':
      return snowLogo;
    case 'sunny':
      return sunLogo;
    case 'thunder':
      return thunderLogo;
    case 'unkown':
      return rainLogo;

    default:
      break;
  }
  return '';
};

export const getTempratureText = (temp: number) => {
  if (temp > 25) {
    return 'HELVETE VAD VARMT DET ÄR';
  } else if (temp > 20) {
    return 'RÄTT SÅ JÄKLA GÖTT ÄNDÅ';
  } else if (temp > 10) {
    return 'AH MEN LITE VÅRIGT MEN GLÖM INTE JACKAN';
  } else if (temp > 0) {
    return 'NU ÄR DET FASEN INTE GÖTT ASSÅ';
  } else if (temp > -10) {
    return 'DET ÄR FAN ALLTID VINTER HÄR';
  } else {
    return 'vänd om. bara gör det....';
  }
};
