import  Typography  from "@mui/material/Typography";
import React,{useState,useEffect} from "react";
import { Grid } from "@mui/material";
import { cityLatLon,weather_mapping_data } from "../dataset/WeatherData";
import axios from 'axios';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

function WeatherCard(props){
    const{id} = props;
    const defaultCityName=localStorage.getItem(id+'_city')||props.cityName;
    const [weatherData, setWeatherData] = useState(null);
    const [apiError, setApiError] = useState(null);
    const findCity= cityLatLon.find((data)=> data.name===defaultCityName);
    const[selectCityData,setSelectCityData]=useState(findCity);


    const selectHandleChange = (event)=>{
        console.log(event.target.value);
        const cityName = event.target.value;
        const findCityName= cityLatLon.find((data)=>data.name===cityName);   
         setSelectCityData(findCityName);
         localStorage.setItem(id+'_city',findCityName.name);
      }

      useEffect(()=>{
        //현재 시간 - 로컬스토리에 저장한 시간 = 로컬스토리지에 저장한 시간으로부터 흘러간 시간이 나옴
        //흘러간 시간이 10분 미만이면 로컬스토리지에 저장한 날씨데이터를 활용
        //흘러간 시간이 10분 이상이면 openAPI를 호출할거에요.
  
      const cityName = selectCityData.name;
      const cityGetDate = cityName + '_저장시간';
      const timelf=  Date.now() - localStorage.getItem(cityGetDate)/1000/60;

      if(timelf>60){

        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${selectCityData.lat}&lon=${selectCityData.lon}&lang=kr&units=metric&appid=399ab079a06ace8b227f831cf3e9661a`)
        .then((res)=>{
            setWeatherData(res.data)
            localStorage.setItem(cityName,JSON.stringify(res.data));
            localStorage.setItem(cityGetDate+'_저장시간',Date.now());
  
            console.log(res);
        })
       .catch((error)=>{
          setApiError(error);
        });
      }else{
       setWeatherData(JSON.parse(localStorage.getItem(selectCityData.name)));
    }
    },[selectCityData])


    const makeWeatherInfo = () =>{
        const {temp, temp_min,temp_max, feels_like,humidity}= weatherData.main;
        const {main,icon} = weatherData.weather[0];

        console.log(weather_mapping_data[main]);
       const parseWeatherData= weather_mapping_data[main]? weather_mapping_data[main]: weather_mapping_data["Mist"];


        const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
         return (
            <Grid item xs={1} sm={2} md={4}>
        <Card sx={{maxWidth:300 }}>
                 <CardActionArea>       
        
        <FormControl>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectCityData.name}
          label="도시"
          onChange={selectHandleChange}
        >
            {cityLatLon.map((city)=>(
              <MenuItem value={city.name}>{city.name}</MenuItem>
            ))}
        </Select>
      </FormControl>
        <Typography gutterBottom variant="h5">{`현재날씨: ${parseWeatherData.name}`}</Typography>
        <CardMedia
            component="icon"
            height="100"
            image={iconUrl}
            alt="현재 날씨"
        />
        <parseWeatherData.icon sx={{fontSize : 125,color: 'red'}}/>
        {/* <img src={iconUrl} alt="현재날씨 아이콘"/> */}
        <CardContent>
        <Typography variant="body2">{`현재온도: ${temp}℃ 체감온도: ${feels_like}℃`}</Typography>
        <Typography variant="body2">{`최저기온: ${temp_min}℃ 최고기온: ${temp_max}℃ 습도:${humidity}%`}</Typography>
        </CardContent>
  
    </CardActionArea>
    </Card>
    </Grid>
    )
    }
     return<>
        {apiError ?
         <Typography>{apiError.massage}</Typography>
        :
        weatherData ?
        makeWeatherInfo()
        :
        <Typography>날씨정보 없음</Typography>}
     </>
}


export default WeatherCard;