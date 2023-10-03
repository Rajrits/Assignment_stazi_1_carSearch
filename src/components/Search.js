import React,{useState} from 'react'
import Cars_data from '../cars_data.json'
import CarCard from './CarCard'



export default function Search(props) {
    const [len, setLen]=useState(1);
    return (
        

        <div>
<div className="search-container">
            {
                Cars_data.filter((e) => {
                    if (props.text === "") {
                        return ;
                    }
                    else if (e.model.toLowerCase().includes(props.text.toLowerCase())) {
                        
                        return e.model.toLowerCase().includes(props.text.toLowerCase());
                    }
                }).map((data) => {
                    return (
                        <div  key={data.id}>
                            
                            <CarCard model={data.model} capacity={data.capacity} mileage={data.mileage} fule_type={data.fuel_type} price={data.price} year={data.year} transmission={data.transmission} imgSrc={data.imgSrc} />
                        
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}
