import React from "react";

const Card = ({ img, name, description }) => {
  return (
    <>
      <div className=" col-md-3 card">
        <img src={img} alt="img" height={240} className="cardImg" />
        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
          <p className="card-text ">{description}</p>
          <button className="cardbtn ">Enquire Now</button>
        </div>
      </div>
    </>
  );
};

export default Card;
