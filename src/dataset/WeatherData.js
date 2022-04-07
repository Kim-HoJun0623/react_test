import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export const cityLatLon=[
    {name: "서울", lat: 37.532600, lon:127.024612},
    {name: "안양", lat: 37.391109, lon:126.967785},
    {name: "부산", lat: 35.166668, lon:129.066666},
    {name: "대전", lat: 36.453569, lon:127.431906},
    {name: "광주", lat: 35.179875, lon:126.878148},
    {name: "울산", lat: 37.767826, lon:3.790845},
    {name: "시흥", lat: 37.4836663, lon:126.9269737},
    {name: "대구", lat: 35.82983, lon:128.690203},
    {name: "파리", lat: 48.864716, lon:2.349014},
]

export const weather_mapping_data={
    Thunderstom:{
        name:"폭우",
        icon: ThunderstormIcon,
    },
    Drizzle:{
        name: "비",
        icon: BeachAccessIcon,
    },
    Snow:{
        name: "눈",
        icon: AcUnitIcon,
    },
    Mist:{
        name: "안개",
        icon: FilterDramaIcon,
    },
    Clear:{
        name: "맑음",
        icon: WbSunnyIcon,
    }
}