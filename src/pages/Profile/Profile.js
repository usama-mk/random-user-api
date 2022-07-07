import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";

import {capitalizeFirstLetter, toTitleCase} from  '../../helpers'

function Profile() {
        const location = useLocation();
    const individualUserIndex = location.state.userIndex;
    const individualUser = location.state.userInfo;
    console.log(location.state.userInfo)
    const event = new Date(individualUser.dob.date);

    var myBirthday, today, bday, diff, days;
     
myBirthday = [parseInt(event.getDate().toString()),parseInt(event.getMonth().toString())]; // 6th of February
today = new Date();
bday = new Date(today.getFullYear(),myBirthday[1]-1,myBirthday[0]);
if( today.getTime() > bday.getTime()) {
    bday.setFullYear(bday.getFullYear()+1);
}
diff = bday.getTime()-today.getTime();
days = Math.floor(diff/(1000*60*60*24));

  return (
    <div style={{display:'flex', justifyContent:'center', alignItems: 'center', height: '100vh'}} >
         <div style={{padding: '20px'}} className="col-md-8 col-sm-6 col-xs-12 shadow-light  ">
      <div className="text-center ">
        <img src={individualUser.picture.large} className="img-circle shadow-light" alt=".." />
        <div className="caption text-center ">
          <h3>{capitalizeFirstLetter(individualUser.name.first)} {capitalizeFirstLetter(individualUser.name.last)}</h3>
          <h5>{toTitleCase(`${individualUser.location.city}, ${individualUser.location.state}`)} <br/>
            {individualUser.location.street.name}
          </h5>
          <h5>Age: {individualUser.dob.age} </h5>
          <h5>Month: {event.getMonth()}, Year: {event.getFullYear()}, Date: {event.getDate()} </h5>
          <h5>Days in birthday: {days} </h5>
          <h5><span className="glyphicon glyphicon-phone" aria-hidden="true"></span> {individualUser.phone}</h5>              
          <a href={`mailto:${individualUser.email}`} target="_top"><span className="btn btn-info glyphicon glyphicon-envelope" aria-hidden="true"></span></a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Profile




// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from "react-router-dom";
// import Button from '@material-ui/core/Button';



// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     profileContainer: {
//       textAlign: 'center',
//       height: '100vh'
//     },
//     homeLink: {
//         textDecoration: 'none',
//         cursor: 'pointer'
//     },
//     profileDiv: {
//         position: 'absolute',
//         top: '15%',
//         left: 0,
//         right: 0,
//         margin: 'auto'
//     },
//     profilePageImage: {
//         borderRadius: '100px',
//         height: '200px'
//     },
//     profileCard: {
//         top: '25%',
//         left: 0,
//         right: 0,
//         margin: 'auto',
//         width: '50%'
//     },
//     profileNameTitle: {
//         fontSize: '30px',
//         fontWeight: 'bold'
//     },
//     profileInfoTitle: {
//         fontSize: '18px',
//         fontWeight: 'bold'
//     },
//   }));

// const Profile = (userData) => {
//     const classes = useStyles();

//    const navigate= useNavigate()

//     const location = useLocation();
//     const individualUserIndex = location.state.userIndex;
//     const individualUser = location.state.userInfo;
    
//     {/* Set active index in state as index passed in as param from Home */}
//     const [activeIndex, setActiveIndex] = useState(individualUserIndex)
    
//     const nextUser = () => {
//         {/*If highest user index, set activeIndex value to 0*/}
//         if (activeIndex === userData.results.length -1){
//             setActiveIndex(0)
//         } else {
//             setActiveIndex(activeIndex + 1)
//         }
//     }

//     const prevUser = () => {
//         {/*If first user index and we go back, sets activeIndex to highest user index*/}
//         if (activeIndex === 0){
//             setActiveIndex(userData.results.length -1)
//         } else {
//             setActiveIndex(activeIndex - 1);
//         }
//     }

//     const setHomeClicked = () => {
//        navigate('/')
//     }

//     return (
//         <Container className={classes.profileContainer} smaxWidth="lg">
//             <h1 className={classes.homeLink} onClick={setHomeClicked}>Home</h1>
//             <div className={classes.profileDiv}>
//                 <Card className={classes.profileCard}>
//                     <CardContent>
//                         <img 
//                             className={classes.profilePageImage} 
//                             src={userData.results[activeIndex].picture.large}
//                         />
//                         <p 
//                             className={classes.profileNameTitle}>
//                             {userData.results[activeIndex].name.title} {userData.results[activeIndex].name.first} {userData.results[activeIndex].name.last}
//                         </p>
//                         <p>
//                             {userData.results[activeIndex].dob.age} year old {userData.results[activeIndex].gender}
//                         </p>
//                         <p className={classes.profileInfoTitle}>Address</p>
//                         <p>
//                             {userData.results[activeIndex].location.street.number} {userData.results[activeIndex].location.street.name}, 
//                             {userData.results[activeIndex].location.city}
//                         </p>
//                         <p>
//                             {userData.results[activeIndex].location.state}, {userData.results[activeIndex].location.country} {userData.results[activeIndex].location.postcode}
//                         </p>
//                         <p className={classes.profileInfoTitle}>Phone</p>
//                         <p>{userData.results[activeIndex].phone}</p>
//                         <p>Registered {`${userData.results[activeIndex].registered.age}`} years ago</p>

//                         <div style={{ paddingBottom: '20px'}}>
//                             <Button variant="contained" color="primary" style={{ float: 'left'}} onClick={() => prevUser()}>
//                                 Previous
//                             </Button>
//                             <Button variant="contained" color="primary" style={{ float: 'right'}} onClick={() => nextUser()}>
//                                 Next
//                             </Button>
//                         </div>
//                     </CardContent>    
//                 </Card>
//             </div>
//         </Container>
//     )
// }

// export default Profile;