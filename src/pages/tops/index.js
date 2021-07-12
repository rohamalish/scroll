import { useEffect, useState } from 'react';
import "./tops.css"
function Tops() {
  let [data,setData]=useState([]);
  
  useEffect(() => {
    const axios = require('axios');
    axios.get('https://random-data-api.com/api/food/random_food').then(item =>{
      setData(item.data)
       });
  },[]);
   return(
     <div>
        {[data].map((item)=> <div className="box-tops" key={Date()}>
         <div><h2>{item.id}</h2></div>
         <div> <h2>{item.uid}</h2></div>
         <div> <h2>{item.dish}</h2></div>
         <div> <h2>{item.description}</h2></div>
         <div> <h2>{item.ingredient}</h2></div>
       
        
         </div>)}
     </div>
   );
 }

 export default Tops;