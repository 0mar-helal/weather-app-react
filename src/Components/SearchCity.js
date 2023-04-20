import perfectDay from '../icons/perfect-day.svg';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from "framer-motion";

const SearchCity = ({setCity,getWeather,setWeather,setNotFound}) => {
    const history=useNavigate();
    const cityVariants = {
        hidden: { 
            opacity:0,
        },
        visible: { 
            opacity: 1, 
            transition: {duration: 1}
        },
        exit: {
            x: "-100vh",
            transition: { ease: 'easeInOut' ,duration:1 }
        }
    };
    const submit = (e)=> {
        e.preventDefault();
        getWeather();
        history("/weather");
    }
    useEffect(()=> {
        setWeather(null);
        setNotFound(0);
    },[]);
    return (
        <motion.div 
        className="search-city-content d-flex flex-column justify-content-center align-items-center text-center p-5 g-3"
        variants={cityVariants}
        initial='hidden'
        animate='visible'
        >
            <h3 className='fs-3 fw-bold'>React Weather App</h3>
            <motion.img 
            src={perfectDay} 
            alt="#" 
            className='my-3 w-50'
            drag
            dragConstraints={{left:0,top:0,right:0,bottom:0}}
            />
            <span className='fs-4'>Find weather of your city</span>
            <form onSubmit={submit}>
                <InputGroup className="mt-4 mb-2">
                    <Form.Control
                    placeholder="City"
                    aria-label="City"
                    onChange={(e)=> setCity(e.target.value)}
                    />
                    <button className='my-btn'> Search</button>
                </InputGroup>
            </form>
        </motion.div>
)}
export default SearchCity;