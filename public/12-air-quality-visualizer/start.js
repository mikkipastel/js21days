(() => {
  // เริ่มเขียนโค้ด
  const KEY = "42c140cb-6b8a-4455-beb2-487c4dbd8595";

  async function getAirQuality({city, state, country}) {
    const response = await fetch(
      `https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${KEY}`
    );
    const { data: { current } } = await response.json();
    const { pollution, weather} = current;
    return {
      aqi: pollution.aqius,
      temperature: weather.tp,
      humidity: weather.hu,
      wind: weather.ws
    }
  }

  function displayAirQuality({
    city,
    state,
    country,
    aqi,
    temperature,
    humidity,
    wind
  }) {
    const cityElement = document.querySelector('.city');
    const stateElement = document.querySelector('.state-country');
    const aqiElement = document.querySelector('.aqi > h1');
    const temperatureElement = document.querySelector('.temperature');
    const humidityElement = document.querySelector('.humidity');
    const windElement = document.querySelector('.wind');

    cityElement.innerText = city;
    stateElement.innerText = `${state}, ${country}`;
    aqiElement.innerText = aqi;
    temperatureElement.innerText = `Temp : ${temperature}`;
    humidityElement.innerText = `Humidity: ${humidity}`;
    windElement.innerText = `Wind ${wind} m/s`;
  }

  function setAirQualityColor(aqi) {
    if (aqi <= 50) {
      document.documentElement.style.setProperty(
        '--current-aqi-color',
        'var(--good-aqi-color)'
      )
    } else if (aqi <= 100) {
      document.documentElement.style.setProperty(
        '--current-aqi-color',
        'var(--medium-aqi-color)'
      )
    } else {
      document.documentElement.style.setProperty(
        '--current-aqi-color',
        'var(--bad-aqi-color)'
      )
    }
  }
  
  async function run() {
    const city = 'Sathon';
    const state = 'Bangkok';
    const country = 'Thailand';

    const {aqi, temperature, humidity, wind} = await getAirQuality({city, state, country});

    displayAirQuality({
      city,
      state,
      country,
      aqi,
      temperature,
      humidity,
      wind
    });

    setAirQualityColor(aqi);
  }

  run();

})();
