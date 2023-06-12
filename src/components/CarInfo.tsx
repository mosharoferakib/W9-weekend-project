
export interface CarInfo{
    id: number,
    name: string,
    year?: number,
    selling_price?: number,
    km_driven?: number,
    fuel?: string,
    seller_type?: string,
    transmission?: string,
    owner?: string,
    mileage?: string,
    engine?: string,
    max_power?: string,
    torque?: string,
    seats?: number
    
  }
  interface carProps{
    key:number,
    car:CarInfo
  }
  
  export default function CarInfo(props:carProps) {
    
    
    return (
      <div>
      <h4>Brand: {props.car.name}</h4>
      <h5>Price: ${props.car.selling_price}</h5>
      <p>Fuel Type: {props.car.fuel}</p>
      <p>Engine: {props.car.engine}</p>
      <p>Transmission: {props.car.transmission}</p>
      </div>

    )
  }


