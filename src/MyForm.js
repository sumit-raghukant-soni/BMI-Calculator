// function myForm(){
//     return (
//         <form>
//             <label> Enter Name: 
//                 <input type="text" />
//             </label>
//         </form>
//     );
// }

// export default myForm;




// import {useState} from 'react'

// function MyForm(){
//     const [name, setName] = useState("");

//     return (
//         <form>
//             <label>
//                 Enter your Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
//             </label>
//         </form>
//     );
// }

// export default MyForm;


// import {useState} from 'react';

// function MyForm(){
//     const [Name, setName] = useState("");

//     const SubmitHandler = (event) => {
//         event.preventDefault();
//         alert("Your name is " + Name + ", Thats amazing!!!");
//     }

//     return (<form onSubmit={SubmitHandler}>
//         <label htmlFor="">Enter Your Name: <input type="text" value={Name} onChange={(e) => setName(e.target.value)}/></label>
//         <input type="submit"/>
//     </form>);
// }

import { useState } from "react";

function MyForm(){
    const [inputs, setInputs] = useState({});
    const [carBrand, setcarBrand] = useState("VOLVO");

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({...values, [name]: value}))
    }

    const HandleSubmit = (event) => {
        event.preventDefault()
        alert(inputs.username + inputs.age + carBrand + " something")
    }

    const handleCarChange = (event) => {
        event.preventDefault();
        setcarBrand(event.target.value);
    }

    return (<form onSubmit={HandleSubmit}>
        <label htmlFor="">Enter your name: <input type="text" name="username" value={inputs.username || ""} onChange={handleChange}/></label>
        <br/>
        <label htmlFor="">Enter your age: <input type="number" name="age" value={inputs.age || ""} onChange={handleChange}/></label>
        <br/>
        <select name="carBrand" value={inputs.carBrand} onChange={handleCarChange}>
            <option value="VOLVO">Volvo</option>
            <option value="Ford">Ford</option>
            <option value="MERCEDEZ">Mercedez</option>
            <option value="PORCHE">Porche</option>
        </select>
        <br/>
        <input type="submit" value="SUBMIT"/>
        <br/>
    </form>);
}



export default MyForm;