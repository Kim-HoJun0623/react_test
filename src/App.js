import faker from '@faker-js/faker';//영문 버전의 faker.js
import faker_ko from '@faker-js/faker/locale/ko' // 한글 버전의 faker.js
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './App.css';



function App() {
  const userDatas = [];

  while(userDatas.length < 5){
    userDatas.push({
      avatar: faker.image.avatar(),
      name: `${faker_ko.name.lastName()}${faker_ko.name.firstName()}`,
      email: faker.internet.email(),
      jobTitle: faker.name.jobTitle(),
      phoneNo: faker.phone.phoneNumber(),
      image: faker.image.avatar()
      
    }
  )
  }

   const userCards = userDatas.map((userData, idx) => {
    return <Card sx={{ maxWidth: 345 }}>
    
    <CardActionArea>
    
      <CardMedia
        component="img"
        height="240"
        image= {userData.image}
        alt="green iguana"
      />
    
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {userData.name}
        </Typography>
        <h4>{ userData.jobTitle }</h4>
        { userData.email }<br />
        <br />
         { userData.phoneNo }
      </CardContent>
    </CardActionArea>
  
  </Card>
    
    
  //   <div key={idx}>
  //   <h4>{ userData.jobTitle }</h4>
  //   <img src={ userData.avatar }alt="사용자 프로필용 아바타"></img>
  //   <h5>{ userData.name }</h5>
  //   { userData.email }<br />
  //   { userData.phoneNo }
  // </div>
  })

  return (
    <div className="App">
      {userCards}
    </div>
  );
}

export default App;