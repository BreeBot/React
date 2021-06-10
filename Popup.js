import React from "react"
import PerformanceList from "./PerformanceList"

const Popup = () => {

  const handleExit = () => {
    confirm("you totally want to see these bands")
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    alert("Wowzer!!")
  }

  return(
    <div className = "popup">
      <h1>You have won tickets to Slipknot <span  className = "xButton"  onClick = {handleExit}>X</span></h1>
      <p>Please enter your email, so we can send you the tickets</p>
      <form onSubmit = {handleSubmit}>
        <input type = "email" className = "email-form" name = "email" placeholder = "your email here"/>
        <input type = "submit" className = "claim-btn" name = "Claim-btn" value = "claim your prize"/>
      </form>
      <PerformanceList />
    </div>
  )
}

export default Popup