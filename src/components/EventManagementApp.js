import React from "react"
import EventTile from "./EventTile"
import DogImage from "./DogImage"

//Part 1
// This component should render a div with a className of event-management-app
// Inside that div let's add a h1 tag that has the text "Now viewing your upcoming events"
// Import this component into main.js and ensure that it is being rendered on to the DOM

//Part2
// Add a new div with the className of event-tile as a child to the existing div (the one with the className event-management-app)
// Ensure that this div renders a header with the text "Brunch with Werewolves"
// Add a p tag to the event-tile div with the text "10:00am - 12:00pm"
// Optional: add an additional description in another p tag that the boss should keep in mind when dining with...lycanthropes. If you think she might need it.

//Part4
// You are already rendering the EventTile once. Call on it three more times. 
//You should see "Brunch with Werewolves" on the screen four times.

//Part5
//Make sure that the title prop is still being passed down to each EventTile, 
//but now using the above data structure e.g. title={events[0].title}.


const EventManagementApp = () => {
  const events = [
    { title: "Brunch with Werewolves", timePeriod: "10:00am - 12:00pm", description: null, eventType: "personal"},
    { title: "Strategy Meeting with the Finfolk on New Import Tariffs", timePeriod: "1:00pm - 2:00pm", description: "The World Wizardry Workgroup hit us hard on these tariffs.", eventType: "business" },
    { title: "Award Ceremony for Amrita the Banshee", timePeriod: "2:00pm - 3:00pm", description: "Bring earplugs, have fun.", eventType: "business-casual" },
    { title: "Djinn Tech Support with the Qamar and Caliope", timePeriod: "4:00pm - 5:00pm", description: "Computers are down, let them work their magic.", eventType: "business" }
  ]
  
  let eventsList = events.map(event => {
    let background = "event-tile"

    if (event.eventType === "personal"){
      background = "green-bg"
    } else if(event.eventType === "business-casual"){
      background = "pink-bg"
    } else if (event.eventType === "business") {
      background = "blue-bg"
    }

    return(
      <EventTile 
        title = {event.title}
        timePeriod = {event.timePeriod}
        description = {event.description}
        tileBackground = {background}
      />
    )
  })

  return (
    <div className = "event-management-app">
      <h1>Now viewing your upcoming events</h1> 
      {eventsList}
      <DogImage />
    </div>

  )
}

export default EventManagementApp