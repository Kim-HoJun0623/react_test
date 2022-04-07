import  Container  from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import {makeUserDatas} from './Utils';
import UserCardList from './conponents/UserCardList';
import axios from 'axios';
import WeatherCard from './conponents/WeatherCard';

import  Grid  from '@mui/material/Grid';

import { cityLatLon } from './dataset/WeatherData';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const userDatas =makeUserDatas(500);



function App() {
      
        const [useDarkMode,setUseDarkMode] = useState(true);
        const [weatherData, setWeatherData] = useState(null);
        const [apiError, setApiError] = useState(null);

        const[selectCityData,setSelectCityData]=useState({name:"안양",lat:37.391109,lon:126.967785});

        const handleChange = (event) =>{
          console.log(useDarkMode)
          setUseDarkMode(event.target.checked)
          // setUseDarkMode(useDarkMode? false:true)
        }

        const selectHandleChange = (event)=>{
          console.log(event.target.value);
          const cityName = cityLatLon.find((data)=>data.name===event.target.value);   
           setSelectCityData(cityName);
        }


        useEffect(()=>{
          const callAPI = async() =>{
            try{
              const result=await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${selectCityData.lat}&lon=${selectCityData.lon}&lang=kr&units=metric&appid=399ab079a06ace8b227f831cf3e9661a`)
              setWeatherData(result.data)
              console.log(result)
            }
            catch(error){
              setApiError(error);
            }
          }
          callAPI();
          console.log("component did mount")
       
        },[selectCityData])
        useEffect(()=>{
          console.log(`theme 변경됨 -> ${useDarkMode}`)
        },[useDarkMode])

        useEffect(()=>{

        });
     

      console.log("render")
  //페이지당 보여줄 컨텐츠 수 :6
  //
  return (
    <ThemeProvider theme={createTheme({
      palette:{
        mode: useDarkMode? 'dark' : 'light',
      },
    })}>   
      <Box sx={{
            bgcolor: 'background.default',
            color: 'text.primary',
            p: 1,
            }}>
            <Box sx={{
            minHeight: '100%',
            bgcolor: 'background.default',
            color: 'text.primary',
            p: 1,
            }}> 
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
      <Grid container spacing={{xs:2, md:3}} columns={{xs:4,sm:4,md:12}}>
        <WeatherCard weatherData={weatherData} apiError={apiError}/>
        <WeatherCard weatherData={weatherData} apiError={apiError}/>
        <WeatherCard weatherData={weatherData} apiError={apiError}/>
        </Grid>
      </Box>

      <Switch
          checked={useDarkMode}
          onChange={handleChange}
          color="warning"
          inputProps={{ 'aria-label': 'controlled' }}
      />
  <Container maxWidth="lg" sx={{p:1}}>
          
            <UserCardList userDatas={userDatas}/>

      </Container>
      </Box>
      </ThemeProvider>

  );
}

export default App;