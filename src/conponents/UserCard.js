import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



function UserCard(props) {

    const{userData,idx}=props;
  
  return <div key={idx}>
  <Card sx={{ maxWidth: 345 }}>
  
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
  
</div>
}

export default UserCard;