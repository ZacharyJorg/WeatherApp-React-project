import React, {useState} from "react"
import './SideBar.css'

export function SideBar (props){
const [buttonClicked, setButtonClicked] = useState(false);


function handleClick() {
    if(buttonClicked){
        setButtonClicked(false)
    } else {
    setButtonClicked(true);
    }
  }

  function handleLocationChange(event) {
    props.onLocationChange(event.target.value);
  }
  
  if(buttonClicked){
    return (
      <>
      <button className="searchButton" onClick={handleClick}>Search</button>
        <div className="backdrop">
            <input type='text' value={props.location} onChange={handleLocationChange} className="cityInput"></input>
            <button className="findButton">FIND</button>
        </div>
      </>
    )
  } else {
    return(
        <>
        <button className="searchButton" onClick={handleClick}>Search</button>
        </>
    )
  }
  }
