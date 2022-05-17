import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";

import { BsSearch } from "react-icons/bs";
import "./Dropdown.css";

export default function Dropdown() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const handleClick = () => {
    console.log("pick");
    <DateRangePicker
      onChange={(item) => setState([item.selection])}
      showSelectionPreview={true}
      moveRangeOnFirstSelection={false}
      months={2}
      ranges={state}
      direction="horizontal"
    />;
  };

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
        <div className="topandbottom">
          <p className="toptext">Checking in</p>
          <p className="bottomtext">When?</p>
        </div>
        <div className="topandbottom">
          <p onClick={handleClick} className="toptext">
            Checking out
          </p>
          <p className="bottomtext">When?</p>
        </div>
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
