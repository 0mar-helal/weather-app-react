import { Routes as Switcher , Route } from 'react-router-dom/dist';
import SearchCity from './Components/SearchCity';
import Weather from './Components/Weather';
import Container from 'react-bootstrap/Container';
import { useCallback, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [city,setCity] = useState(null);
  const [weather,setWeather]= useState(null);
  const [notFound,setNotFound]= useState(0);
  const getWeather = useCallback(async()=> {
    try {
          const res =await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`);
          setWeather(res.data);
          console.log(res);
        }
    catch (err) {
          console.log(err);
          setNotFound(1);
      }
    },[city])
  const location = useLocation();
  return (
      <AnimatePresence exitBeforeEnter>
          <div className="App d-flex justify-content-center align-items-center m-0 h-vh-100 overflow-hidden">
          <Container className='d-flex justify-content-center align-items-center'>
              <Switcher location={location} key={location.key}>
                  <Route path='/' element={<SearchCity city={city} setCity={setCity} setWeather={setWeather} setNotFound={setNotFound} getWeather={getWeather}/>} />
                  <Route path='/weather' element={<Weather weather={weather} notFound={notFound}/>} />
              </Switcher>
            </Container>
          </div>
      </AnimatePresence>
  );
}

export default App;
