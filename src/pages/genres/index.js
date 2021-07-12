import { useEffect, useState } from 'react';
import './geners.css'
function Genres() {
  let [data,setData]=useState([]);
  
  useEffect(() => {
    const axios = require('axios');
    axios.get('https://random-data-api.com/api/name/random_name').then(item =>{
      setData(item.data)
       });
  },[]);

   return (
     <div>
       {[data].map((item)=> <div className="box-genres" key={Date()}>
         <div><h2>{item.name}</h2></div>
         <div> <h2>{item.two_word_name}</h2></div>
         <div> <h2>{item.first_name}</h2></div>
         <div> <h2>{item.name_with_middle}</h2></div>
         <div> <h2>{item.name_with_initials}</h2></div>
         <div> <h2>{item.lastname}</h2></div>
        
         </div>)}
          
     </div>
   );
 }

 export default Genres;