import React,{useEffect, useState} from 'react'
import Card from '../Components/card'
import axios from 'axios'
const News = () => {
    const [ news, setnews ] = useState([]);
    const fatchuser = async()=> {
        const response = await axios.get("api/getnews");  
        if (response.data.success===true) { console.log("getting news");  setnews(response.data.data)}
        else console.log("there is a problem")


};
   useEffect(
        () => {
            fatchuser();
        }, []
    );
    return (
        <>
          { news.map((e,key)=>{
              return(
                  <>
                      <Card
                          current={key}
                          name = {e.name}
                          headline={e.headline}
                          description = {e.description}
                      />
                      </>
              )  
           })}
        </>
    )



}
export default News;