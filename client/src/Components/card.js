import React from "react";
import EmailIcon from "@mui/icons-material/Email";
const Card = ({name, headline, description, current,email }) => {
  const colours = ["orange", "pink", "skyblue", "red", "yellow", "green"];
  const colours2 = ["maroon", "black", "red", "blue", "lime", "purple"];
    console.log(email);
  return (
    <>
      <div
        style={{ backgroundColor: colours[current % 6] }}
        class="card text-white mb-3"
      >
        <div class="card-header" style={{ color: "black" }}>
          <b>{name} </b>
        </div>
        <div class="card-header" >
          <EmailIcon style={{color:"black"}} />
          {email}{" "}
        </div>
        <div class="card-body">
          <h5 class="card-title" style={{ color: `${colours2[current % 6]}` }}>
            {" "}
            {headline}{" "}
          </h5>
          <p class="card-text">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Card;