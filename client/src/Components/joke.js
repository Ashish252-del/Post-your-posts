import React,{useEffect, useState} from 'react'
import Card from '../Components/card'
import axios from 'axios'
const Joke = () => {
    const [ joke, setjoke ] = useState([]);
    const fatchuser = async()=> {
        const response = await axios.get("api/jokes");  
        if (response.data.success === true) {
            console.log("getting joke");
            setjoke(response.data.data)
        }
        else console.log("there is a problem")


};
   useEffect(
        () => {
            fatchuser();
        }, []
    );
    return (
        <>
          { joke.map((e,key)=>{
              return(
                  <>
                      <Card
                          current={key}
                          name={e.name}
                          email={e.email}
                          headline={e.headline}
                          description = {e.description}
                      />
                      </>
              )  
           })}
        </>
    )



}
export default Joke;