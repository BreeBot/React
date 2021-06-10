import React from "react"
import DogImage from "./DogImage"


//Part3
// Create a new EventTile component in its own file.
// Move all of the JSX that is contained in the event-tile div you created (including the div itself) into the return of EventTile
// Import this component into EventManagementApp, and render it right where your old JSX code used to be.

//Part4
// Make the "event title" in an EventTile be dependent on props e.g. {props.title}. 
//For each EventTile, pass down a single prop called title, but pass a different event title to each tile e.g. title=event[0]

const EventTile = (props) => {

  return (
    
    <div className = {props.tileBackground}>
    <h1>{props.title}</h1>
    <p>{props.timePeriod}</p>
    <p>{props.description}</p>
  </div>

  )
}

export default EventTile