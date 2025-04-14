import React from "react";
import shapImg from "../assets/yasarImg.png";
import "../style/home.css";
const Home = () => {
  return (
    <>
      <div className="home  container-fluid" id="/">
        <div className="row homeRow">
          <div className="col-md-6 left ">
            <div className="home-heading animation">
              <p >
                Hello,I'm <br />
                <span className="display-2 myName " >Yasar Khan</span>
                <br />
                
              Experienced phone repair technician skilled in diagnosing and fixing 
              a variety of issues,
              from cracked screens to battery replacements. Committed to 
              providing quick, reliable service with a focus on customer satisfaction.
              </p> 
              <button className="btn btn-full hire-btn">Hire Me</button>
              {/* <button className='hire-btn'>Hire Me</button> */}
            </div>
          </div>
          <div className="col-md-6 right" style={{backgroundColor:""}}>
            <div className="box" style={{backgroundImage:`URL(${shapImg})`}}></div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
