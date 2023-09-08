import React from "react"
import Navbar from "../Navbar/Navbar";

const CreateRide = () => {
    return (
    <>
    <Navbar/>
    <div className="body">
      <div class="center">
        <h1>Create Ride</h1>
        <form method="post">
          <div class="txt_field">
            <input type="text" required />
            <span></span>
            <label>From</label>
          </div>
          <div class="txt_field">
            <input type="text" required />
            <span></span>
            <label>To</label>
          </div>
          <div class="txt_field">
            <input type="number" required />
            <span></span>
            <label>Passanger</label>
          </div>
          <input type="submit" value="Create" />
        </form>
      </div>
    </div>
    </>
    )
}

export default CreateRide;