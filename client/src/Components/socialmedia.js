import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from '../Components/card'
const Social = () => {
    const [update, setupdate] = useState([]);
    const fatchuser = async () => {
        const response = await axios.get("api/getsocialmedia");
        if (response.data.success) setupdate(response.data.data);
        else console.log("Somthing wrong")
    };
    useEffect(() => { fatchuser(); }, []);
    return (
       <>
        {
            update.map((e, key) => {
                return (
                    <>
                        <Card
                            current={key}
                            name={e.name}
                            headline={e.headline}
                            description={e.description}
                        />
                    </>
                )
            }
            )
        }
       </>
    )
}
 export default Social;