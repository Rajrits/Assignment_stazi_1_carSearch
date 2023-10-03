import React, { useEffect, useState } from 'react'
import CarCard from './CarCard'
import Cars_data from '../cars_data.json';

export default function CarList(props) {

  
  

  return (
    <div className="main-container">
      {
        Cars_data.slice(props.firstIndex,props.lastIndex).map((data) => {
          return (
            <div key={data.id}>
              <CarCard model={data.model} capacity={data.capacity} mileage={data.mileage} fule_type={data.fuel_type} price={data.price} year={data.year} transmission={data.transmission} imgSrc={data.imgSrc} />
            </div>
          )
        })
      }
      
    </div>
  )
}
