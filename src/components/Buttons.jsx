import classes from './styling.css'
import satData from "./satData.jsx";
// import filterByType from "../App.jsx";
// import setSat from "../App.jsx";
// import displaySats from "../App.jsx";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div className='flex-container'>
      {displaySats.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id} name={sat}>
            {sat} Orbit
          </button>); })}
      <button onClick={() => setSat(satData)} name="allOrbits">All Orbits</button>
    </div>
  );
};

export default Buttons;