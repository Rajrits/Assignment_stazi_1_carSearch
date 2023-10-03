import React from 'react'


export default function CarCard(props) {
  return (
    <div>
      <div className="Car_card_container">
        <div className="car_img">
        <img className = "Car_card_img" src={props.imgSrc}alt="" />
        </div>
        <div className="name_and_year">
            <strong><span className='name'>{props.model}</span></strong> <strong><span className='year' >{props.year}</span></strong>
        </div>
        <div className="Car_info">
            <div className="feature"><img className='icon_img' src="./images/user.png" alt="" />4 People</div>
            <div className="feature"><img className='icon_img' src="./images/petrol-pump.png" alt="" />{props.fule_type}</div>
            <div className="feature"><img className='icon_img' src="./images/download-speed.png" alt="" />{props.mileage}</div>
            <div className="feature"><img className='icon_img' src="./images/steering-wheel.png" alt="" />{props.transmission}</div>
        </div>
        <div className="separater">  
        </div>
       <div className="card_footer">
       <div className="price">
            <span className='amount'>{`$ ${props.price}`}</span><span className='time_period'>/month</span>
        </div>
            <button className='btn'>Rent now</button>
       </div>
      </div>
    </div>
  )
}
