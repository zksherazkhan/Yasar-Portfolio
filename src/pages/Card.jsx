import React from 'react'

const Card = (props) => {
  return (
    <>
      <div className="card">
        <img src={props.img} alt="img"  height={240} className='cardImg' />
        <div className="card-body text-center" style={{marginTop:""}}>
            <h5 className='card-title'>{props.name}</h5>
            <p className="card-text " style={{marginTop:""}}>{props.description}</p>
            <a href="" className='cardbtn '>Enquire Now</a>
        </div>
        </div>

    </>
  )
}

export default Card;
