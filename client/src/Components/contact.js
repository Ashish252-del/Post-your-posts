import React,{useState} from "react";
import Button from '@mui/material/Button';
import axios from "axios";

const Contact = () => {
  const [value, setvalue] = useState({
    name: "", category:"", headline:"", description:""
   
 })
  const handlesubmit = async(e) => {
    try {
    
      e.preventDefault();
      if (value.name.length === 0 || value.category.length === 0 || value.headline.length === 0 || value.description.length === 0) {
        return alert("Please fill all the fields");
      }
      const resp = await axios.post("api/post",
        { name: value.name, category: value.category, headline: value.headline, description: value.description });
      // since we are getting response for request from backend
      // hence  response.data mesns data of response from api 
      setvalue({
        name: "", category: "", headline: "", description: ""
   
      });
      if(resp.data.success) console.log("Deta is posted successively")
      alert("Form Submitted")
      
    } catch (error) {
      console.log(error);
      console.log("somthing went wrong");
    }
   
  }
  const inputevent = (e) => {
    const { name, value } = e.target;
    setvalue(
      (prev) => {
        console.log(prev);
        return {
          ...prev,
          [name]: value
        }
      }
    )
  }

    return (
      <>
        
        <form  onSubmit={handlesubmit}>
        <div style={{
          display: "flex", justifyContent: "center", backgroundColor: "pink",
         border:"2px solid rgb(184, 13, 70)"}}>
          <div style={{padding:"10px",}} >
              <input type="text" placeholder="Your Name" name="name" value={ value.name} onChange={inputevent} style={{
              padding: "1px",
             border:".5px solid rgb(184, 13, 70)"}} />
          <hr/>
             <select class="form-select" aria-label="Default select example" name="category" value={value.category} onChange={inputevent}>
  <option selected value="" >Select Category</option>
  <option value="Latest_News" >Latest_News</option>
  <option value="Social_Media_Trending">Social_Media_Trending</option>
  <option value="Jokes">Jokes</option>
</select>
          <hr/>
            <input type="text" placeholder="Headline" name = "headline" value ={value.headline} onChange={inputevent}
           style={{
              padding: "1px",
             border:".5px solid rgb(184, 13, 70)"}}  />
          <hr/>
              <textarea rows="4" cols="50" name="description" form="usrform" placeholder="Description" value={value.description}
                onChange={inputevent}
             style={{
              padding: "1px",
             border:".5px solid rgb(184, 13, 70)"}}/>

            <hr/>
            <Button type="submit" style={{color:"red"}}>Send</Button>
          </div>


          </div>
          </form>
        </>
    )



}
export default Contact;