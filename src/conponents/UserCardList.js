import Pagination from '@mui/material/Pagination';
import  Grid  from '@mui/material/Grid';
import UserCard from './UserCard';
import {paginate} from '../Utils';
import {useState} from 'react';




function UserCardList(props){
    const pageContentCount= 6;
    const [pageNo, setPageNo] =useState(1) 
    const [currentUserData, setCurrentUserData] = useState(paginate(props.userDatas,pageContentCount,pageNo));
 

    const handleChangePageNo = (event, value)=>{
        setPageNo(value)
        setCurrentUserData(paginate(props.userDatas,pageContentCount,value))
    }

    const userCards = currentUserData.map((userData, idx) => {
      
        return <Grid item xs={2} md={4} key={idx}>   
          <UserCard userData={userData} idx={idx}/>
    </Grid> 
    })
    return [
        <Grid container spacing={{xs:2, md:3}} columns={{xs:4,sm:8,md:12}}>
      {userCards}    
      </Grid>,
      <Pagination 
      count={Math.ceil(props.userDatas.length/pageContentCount)} 
      page={pageNo}
      color="primary"
      onChange={handleChangePageNo} />
    ]

}
export default UserCardList;