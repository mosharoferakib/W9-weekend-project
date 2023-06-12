import {useState, useEffect} from 'react'
import { CarInfoable } from '../components/CarInfo';
import { useParams } from "react-router-dom";
import CarCard from '../components/CarInfo';
export default function SingleCarPage() {
    const base_api_url = import.meta.env.VITE_APP_BASE_API

    const {carID} = useParams()



    const [car, setCar] = useState<CarInfoable>({id:0,name:'',year:0})
    
    useEffect(()=>{
        (async ()=>{
            const res = await fetch(`${base_api_url}/${carID}`)
            if(res.ok){
                const data = await res.json()
                setCar(data)
            }
        })()
    })
  
  
    return (
        <>
        
        <CarCard car={car} key={car.id}/>
        
        
        
        </>
    
  )
}