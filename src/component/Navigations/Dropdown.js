import React from "react";
import { BsSearch } from "react-icons/bs";
import "./Dropdown.css";

export default function Dropdown() {
  return (
    <div className="flexdropdown">
      <div className="accomodation">
        <p className="titletag">Accomodations</p>
        <p className="titletag">Experiences</p>
        <p className="titletag">Online Experiences</p>
      </div>

      <section className="calender">
        <div className="topandbottom">
          <p className="toptext">Location</p>
          <p className="bottomtext">Where are you going?</p>
        </div>

        <div className="vl"></div>
        <div className="topandbottom">
          <p className="toptext">Checking in</p>
          <p className="bottomtext">When?</p>
        </div>

        <div className="vl"></div>
        <div className="topandbottom">
          <p className="toptext">Checking out</p>
          <p className="bottomtext">When?</p>
        </div>

        <div className="vl"></div>
        <div className="topandbottom">
          <p className="toptext">Guests</p>
          <p className="bottomtext">Who?</p>
        </div>

        <div className="dropicon">
          <BsSearch className="bssearch" />
        </div>
      </section>
    </div>
  );
}
