import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Infobox from './Infobox';
import "./Infobox.css"
import SendIcon from '@mui/icons-material/Send';
export default function Searchbox(){
     let[city,setCity]=useState("");
     let handleChange=(event)=>{
        setCity(event.target.value)
     }
     
     let API_KEY="b7c05011c59967a60617c79c8c2d88d4"
     let [w,setW]=useState({});
     let apiCall=async (event)=>{
        event.preventDefault();
       
        let URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        let response=await fetch(URL);
        let weather=await response.json();
        setCity("");
       
        let result={
            temp:weather.main.temp,
            feels_like:weather.main.feels_like,
            temp_min:weather.main.temp_min,
            temp_max:weather.main.temp_max,
            humidity:weather.main.humidity,
            dec:weather.weather[0].description,
            loc:weather.name,
        }
       setW(result);
       console.log(weather.name)
       console.log(result);
     }
    return(

        <div className="Searchbox">
            <div className="inputel">
        <p className='wp'> <img src="https://images.unsplash.com/photo-1705077296278-d82dd5c8662f?q=80&w=809&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" id='wimg'></img> Search for Weather:</p>
        <form onSubmit={apiCall}>
            <TextField id="city" label="Enter City Name" variant="outlined" required value={city} onChange={handleChange} sx={{borderRadius: "8px",backgroundColor: "#f0f8ff"}}/>
            <br></br>
            <br></br>
            <Button variant="contained" type='submit'endIcon={<SendIcon />} id='btn'>Go</Button>
        </form>
        </div>
        
       {w.temp && <Infobox data={w} />} 
      
        </div>
        
         
    )
}