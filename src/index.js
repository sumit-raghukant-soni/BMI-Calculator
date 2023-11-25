import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/Nopage";

// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// App for getting insights on react router dom
// export default function App() {
//     return (
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="blogs" element={<Blogs />} />
//             <Route path="contact" element={<Contact />} />
//             <Route path="*" element={<NoPage />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     );
//   }
  


// Using Hooks example
// const App = () => {
    // const [count, setCount] = useState(0);
    // const [todos, setTodos] = useState(["todo 1", "todo 2"]);

    // const increment = () => {
    //     setCount((c) => c + 1);
    // }

//     return (
//         <>
        
//         </>
//     )
// }


//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(<App />);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// // Script to directly get the element into the root element of the index page
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// // import Tmp from './Tmp';
// import Tmp2 from './Tmp2';
// import MyForm from './MyForm';


// // const hintName = "Sumit"

// // const input = <input type="text" placeholder={hintName}/>

// // const x = 5;

// // const element = 
// //                 <>
// //                 <p className='one2'>{x <= 5 ? "Hello" : "No Hello"} This is an example para</p>
// //                 <p>This is an example para2</p>
// //                 </>

// // const myTable = 
// //                 <table>
// //                   <tr>
// //                     <td>
// //                       This
// //                     </td>
// //                     <td>
// //                       is
// //                     </td>
// //                   </tr>
// //                   <tr>
// //                     <td>an</td>
// //                     <td>example</td>
// //                   </tr>
// //                 </table>

// // const defaultElement = React.createElement('h1', {className:'color'}, 'This is an example of use of createElement method of react to build element.');

// const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(element);
// // root.render(defaultElement);
// // root.render(input);

// // class Tmp extends React.Component{
// //   render() {
// //     return <h1>This is class & nested component.</h1>
// //   }
// // }

// // function Tmp2(props) {
// //   return <h1>The color is {props.color}<Tmp color="red"/></h1>
// // }

// // root.render(<Tmp />);


// root.render(<Tmp2 color="blue"/>);

// // function Car(props){
// //   return <h2>I am a {props.brand}!</h2>
// // }

// // function Garage(props){
// //   return  <>
// //             <h2>This is garage {props.brand.model}</h2>
// //             <Car brand={props.brand.brand} />
// //           </>
// // }

// // function Football(props){
// //   const shoot = (a) => {
// //     alert("Your name is "+ a +"!!!");
// //   }

// //   return <button onClick={() => shoot(props.name)}>Click Me</button>

// // }

// const subRoot = ReactDOM.createRoot(document.getElementById("root2"));

// // subRoot.render(myTable);
// // const data = {brand:"brand", model:"model"};
// // subRoot.render(<Garage brand={data}/>);

// // function Football() {
// //   const shot = (a, b) => {
// //     alert(b.type);
// //   }

// //   return (<button onMouseOver={(event) => shot("Goal!", event)}>This is Button</button>);
// // }

// // function MadeGaol(){
// //   return <h4>This is a Goal</h4>
// // }

// // function MissedGoal(){
// //   return <h4>This is Missed One</h4>
// // }

// // function Goals(props){
// //   if(props.isGoal){
// //     return <MadeGaol/>
// //   }
// //   else return <MissedGoal/>
// // }



// // function Car(props){
// //   return <li>I'm a {props.brand} brand.</li>
// // }

// // function Garage(props){
// //   const cars = props.cars
// //   return (<>
// //     <h1>Garage</h1>
// //     {/* {cars.length > 0 ? <h2>You have {cars.length} cars in garage.</h2> : <h2>Your garage is empty.</h2>} */}
// //     <ul>
// //       {cars.map((car) => <Car brand={car}/>)}
// //     </ul>
// //   </>);
// // }


// // subRoot.render(<Football name="Sumit Soni"/>);
// // subRoot.render(<Goals isGoal={true} />);
// // const cars = ["BMW", "Audi", "Ford"]
// // subRoot.render(<Garage cars={cars}/>);


// // const cars = [
// //   {id: 1, brand: "BMW"},
// //   {id: 2, brand: "Audi"},
// //   {id: 3, brand: "Ford"}
// // ]

// // function Car(props){
// //   return <li id={props.id}>The brand of Car{props.id} is {props.brand}</li>
// // }

// // function CarsData(props){
// //   return (<>
// //     <h2>This are the cars in my garage</h2>
// //     <ul>
// //       {props.cars.map((car) => <Car id={car.id} brand={car.brand}/>)}
// //     </ul>
// //   </>);
// // }

// // subRoot.render(<CarsData cars={cars}/>);
// subRoot.render(<MyForm />);