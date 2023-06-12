import {useState, useEffect} from 'react'
import { CarInfo } from "./CarInfo";
import CarCard from './CarInfo';

const base_api_url = import.meta.env.VITE_APP_BASE_API




export default function CarInventory() {
    const [carArray, setCarArray] = useState<CarInfo[]>([])
    
    useEffect(()=>{
        (async ()=>{
            const res = await fetch(`${base_api_url}`)
            if(res.ok){
                const data = await res.json()
                setCarArray(data)
            }
        })()
    },[])


  return (
    
    <div>
        {carArray.map((car)=>{
            return <CarCard car={car} key={car.id} />
        })}
    </div>
    
    
  )
}