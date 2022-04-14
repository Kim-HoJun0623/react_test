import  Container  from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import {makeUserDatas} from './Utils';
import UserCardList from './conponents/UserCardList';

import WeatherCard from './conponents/WeatherCard';

import  Grid  from '@mui/material/Grid';




const userDatas =makeUserDatas(500);



function App() {
      
  const [useDarkMode,setUseDarkMode] = useState(true);

  const handleChange = (event) =>{
    console.log(useDarkMode)
    setUseDarkMode(event.target.checked)
    // setUseDarkMode(useDarkMode? false:true)
  }
     

       


        
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
       
      <Grid container spacing={{xs:2, md:3}} columns={{xs:4,sm:4,md:12}}>
        {/* {[1,2,3,4,5,6,7,8,9].map((no)=> {
          return <WeatherCard id={no}/>
        })} */}
        <WeatherCard cityName="안양"/>
        <WeatherCard cityName="서울"/>
        <WeatherCard cityName="부산"/>
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