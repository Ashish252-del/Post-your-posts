import React,{useState} from "react";
import Button from '@mui/material/Button';
import axios from "axios";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
const Contact = () => {
  const [value, setvalue] = useState({
    name: "", category:"", headline:"", description:"", email:""
   
 })
  const handlesubmit = async(e) => {
    try {
    
      e.preventDefault();
      if (value.name.length === 0 || value.category.length === 0 || value.headline.length === 0 || value.description.length === 0) {
        return alert("Please fill all the fields");
      }
      const resp = await axios.post("api/post",
        { name: value.name, category: value.category, headline: value.headline, description: value.description, email:value.email });
      // since we are getting response for request from backend
      // hence  response.data mesns data of response from api 
      setvalue({
        name: "", category: "", headline: "", description: "", email:""
   
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
        <form class="mb-4" onSubmit={handlesubmit}>
          <h2 class="h1-responsive font-weight-bold text-center my-4">
            Make Instant Post
          </h2>

          <p class="text-center w-responsive mx-auto mb-5">
            You can make your post from here fill all the fields and then click
            on Send Button
          </p>

          <div class="row">
            <div class="col-md-9 mb-md-0 mb-5">
              <form
                id="contact-form"
                name="contact-form"
                action="mail.php"
                method="POST"
              >
                <div class="row">
                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        class="form-control"
                        value={value.name}
                        onChange={inputevent}
                      />
                      <label for="name" class="">
                        Your name
                      </label>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        class="form-control"
                        value={value.email}
                        onChange={inputevent}
                      />
                      <label for="email" class="">
                        Your email
                      </label>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        id="subject"
                        name="headline"
                        class="form-control"
                        value={value.headline}
                        onChange={inputevent}
                      />
                      <label for="subject" class="">
                        Headline
                      </label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form mb-0">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        name="category"
                        value={value.category}
                        onChange={inputevent}
                      >
                        <option selected value="">
                          Select Category
                        </option>
                        <option value="Latest_News">Latest_News</option>
                        <option value="Blog">
                          Blog
                        </option>
                        <option value="Jokes">Jokes</option>
                      </select>
                    </div>
                  </div>
                </div>
                <br />
                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form">
                      <textarea
                        type="text"
                        id="message"
                        name="description"
                        rows="2"
                        class="form-control md-textarea"
                        value={value.description}
                        onChange={inputevent}
                      ></textarea>
                      <label for="message">Description</label>
                    </div>
                  </div>
                </div>
              </form>

              <div class="text-center text-md-left">
                <Button type="submit" style={{ color: "red" }}>
                  Send
                </Button>
              </div>
              <div class="status"></div>
            </div>

            <div class="col-md-3 text-center">
              <ul class="list-unstyled mb-0">
                <li>
                  <i class="fas fa-map-marker-alt fa-2x"></i>
                  <p>
                    <b>Contact Us</b>
                  </p>
                </li>

                <li>
                  <i class="fas fa-phone mt-4 fa-2x"></i>
                  <CallIcon />
                  <p>8869937308</p>
                </li>

                <li>
                  <i class="fas fa-envelope mt-4 fa-2x"></i>
                  <EmailIcon />
                  <p>ashishpatel3946@gmail.com</p>
                </li>
              </ul>
            </div>
          </div>
        </form>

        {/* <form  onSubmit={handlesubmit}>
        <div >
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
          </form> */}
      </>
    );



}
export default Contact;