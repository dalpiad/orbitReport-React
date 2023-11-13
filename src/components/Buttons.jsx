import classes from './styling.css'
import satData from "./satData.jsx";
// import filterByType from "../App.jsx";
// import setSat from "../App.jsx";
// import displaySats from "../App.jsx";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div>
      <button>Placeholder Button</button>
      <button>All Orbits</button>
    </div>

    // <div className='flex-container'>
    //   {displaySats.map((sat, id) => {
    //     return (
    //       <button onClick={() => filterByType(sat)} key={id}>
    //         {sat} Orbit
    //       </button>); })}
    //   <button onClick={() => filterByType(setSat)} key={id}>
    //         {setSat} Orbit</button>
    // </div>
  );
};

export default Buttons;