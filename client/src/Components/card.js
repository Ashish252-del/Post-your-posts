import React from "react";

const Card = ({name, headline, description, current }) => {
  const colours = ["orange", "pink", "skyblue", "red", "yellow", "green"];

  return (
    <>
      <div
        style={{ backgroundColor: colours[current % 6] }}
        class="card text-white mb-3"
      >
        <div class="card-header">{name} </div>
        <div class="card-body">
          <h5 class="card-title"> {headline} </h5>
          <p class="card-text">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Card;