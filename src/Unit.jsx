import React from "react";
import { useState } from "react";
const Unit=()=>
{
  
     const {fromUnit,setFromunit} = useState('KG')
    const {toUnit,setToUnit}=useState("Gram")
    // const {value,setValue}=useState("")
    // const {unit,Setunit}=useState("1")
    // const onchange=(event)=>
    // {
    //     console.log('event',event.target.value)
    //     const value=event.target.value
    //     Setunit(value)
    //     if(event.target.value=="1")
    //     {
    //         SetFromunit("kg")
    //         Setnit("gram")
    //     }
     
  
 return <>
 
 <div className="container">
 <button type="button" className="btn btn-primary">
  Conventer Application
</button>
  <option >Select your Conveter</option>
<select className="" aria-label="Default select example">
  <option value="1">KG-meter</option>
  <option value="2">GRAM-cm</option>
</select>
<div className="mb-3">
  <label className="form-label">{fromUnit}</label>
  <input  className="form-control" placeholder="Enter your value" />
</div>
<div className="mb-3">
  <label className="form-label">{toUnit}</label>
  <input className="form-control" placeholder="Result"/>
 
</div>
 </div>
 
 </>


}
export default Unit;