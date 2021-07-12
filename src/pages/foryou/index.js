import { useEffect, useState } from 'react';
import './foryou.css'
function ForYou() {
  let [data,setData]=useState([]);
  
  useEffect(() => {
    const axios = require('axios');
    axios.get('https://random-data-api.com/api/users/random_user').then(item =>{
      setData(item.data)
       });
  },[]);
   return(
     <div>
        {[data].map((item)=> <div className="box-foryou" key={Date()}>
         <div><h2>{item.id}</h2></div>
         <div> <h2>{item.uid}</h2></div>
         <div> <h2>{item.first_name}</h2></div>
         <div> <h2>{item.password}</h2></div>
         <div> <h2>{item.last_name}</h2></div>
         <div> <h2>{item.email}</h2></div>
        
         </div>)}
     </div>
   );
 }

 export default ForYou;