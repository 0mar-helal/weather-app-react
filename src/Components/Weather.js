import { motion } from "framer-motion";
import Loader from './Loader';
import NotFound from './NotFound';
// import images
import sunset from '../icons/temp.svg';
import humidity from '../icons/humidity.svg';
import wind from '../icons/wind.svg';
import pressure from '../icons/pressure.svg';
import sunny from "../icons/sunny.svg";
import night from "../icons/night.svg";
import day from "../icons/day.svg";
import cloudyNight from "../icons/cloudy-night.svg";
import cloudy from "../icons/cloudy.svg";
import perfectDay from "../icons/perfect-day.svg";
import rain from "../icons/rain.svg";
import rainNight from "../icons/rain-night.svg";
import storm from "../icons/storm.svg";
import smoke from "../icons/smoke.svg";
import mist from "../icons/mist.svg";


const Weather = ({weather,notFound}) => {
    const isDay = weather?.weather[0].icon?.includes('d');
    const getTime = (time) => {
        return `${new Date(time * 1000).getHours()} : ${new Date(time * 1000).getMinutes()}`;
    }
    const weatherVariants = {
        hidden: { 
            x: '1000vh', 
        },
        visible: { 
            x: 0, 
            transition: { duration: 1.5 ,type:'spring'}
        },
    };
    var weatherInfo = [
        {id:1 , name:(isDay)?'sunset':'sunrise' , val:sunset , num:`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`},
        {id:2 , name:'humidity' , val:humidity , num:weather?.main.humidity},
        {id:3 , name:'wind' , val:wind , num:weather?.wind.speed},
        {id:4 , name:'pressure' , val:pressure , num:weather?.main.pressure }
    ];
    const WeatherIcons = {
        "01d":sunny,
        "01n":night,
        "02d":day,
        "02n":cloudyNight,
        "03d":cloudy,
        "03n":cloudy,
        "04d":perfectDay,
        "04n":cloudyNight,
        "09d":rain,
        "09n":rainNight,
        "10d":rain,
        "10n":rainNight,
        "11d":storm,
        "11n":storm,
        "50d":smoke,
        "50n":mist,
    }
    
    weather && console.log(weather);
    //! media query
    return ( 
        weather ? 
        (
            <motion.div 
            className="weather-content d-flex flex-column justify-content-center text-center p-3 g-3"
            variants={weatherVariants}
            initial='hidden'
            animate='visible'
            >
            <h3 className='fs-4 fw-bold'>React Weather App</h3>
            <div className="temp d-flex justify-content-between align-items-center my-4">
                <div className='fs-5'> <span className='fs-2'>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>|{weather.weather[0].description}</div>
                <img className='weather-img' src={WeatherIcons[weather.weather[0].icon]} alt="" />
            </div>
            <span className="city-info fs-2 fw-bold my-2">{weather.name},{weather.sys.country}</span>
            <span className="text-start my-2">Weather info</span>
            <div className="weather-info d-flex flex-wrap w-100 text-center">
                {weatherInfo.map(ele=> (
                    <div className='d-flex justify-content-center align-items-center p-2 w-50' key={ele.id}>
                        <img className=' img-fluid me-3' src={ele.val} alt="" />
                        <div className="d-flex flex-column justify-content-center align-items-center g-2">
                            <span>{ele.num}</span>
                            <span>{ele.name}</span>
                        </div>
                    </div>
                ))}
            </div>
            </motion.div>
        ):
        (
            notFound ? <NotFound/>:<Loader/>
        )
    );
}
export default Weather;