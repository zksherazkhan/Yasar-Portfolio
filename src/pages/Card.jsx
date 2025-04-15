const Card = (props) => {
  return (
    <>
      <div className="card">
        <img src={props.img} alt="img" height={240} className="cardImg" />
        <div className="card-body text-center">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text ">{props.description}</p>
          <button className="cardbtn ">Enquire Now</button>
        </div>
      </div>
    </>
  );
};

export default Card;
