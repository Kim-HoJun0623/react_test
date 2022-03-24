import  Container  from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import {makeUserDatas} from './Utils';
import UserCardList from './conponents/UserCardList';


const userDatas =makeUserDatas(500);

function App() {
      
        const [useDarkMode,setUseDarkMode] = useState(true);

        const handleChange = (event) =>{
          console.log(useDarkMode)
          setUseDarkMode(event.target.checked)
          // setUseDarkMode(useDarkMode? false:true)
        }


        useEffect(()=>{
          console.log("component did mount")
        },[])
        useEffect(()=>{
          console.log(`theme 변경됨 -> ${useDarkMode}`)
        },[useDarkMode])

     

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
            height: '100%',
            bgcolor: 'background.default',
            color: 'text.primary',
            p: 1,
            }}> 
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