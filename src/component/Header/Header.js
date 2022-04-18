import React from "react";
import "./Header.css";

export default function Header({ handleScroll }) {
  return (
    <header className="header" onScroll={handleScroll}>
      <section>
        <aside className="refugees">
          <div className="refugeeswrapper">
            <p className="refugeestext">
              Help house 100,000 refugees fleeing Ukraine
            </p>
            <button className="refugeesbtn">Learn more</button>
          </div>
        </aside>

        <aside className="booking">
          <div className="centered">
            <h2 className="centeredtext">Let your curiosity do the booking</h2>
            <button className="centeredbtn">I'm flexible</button>
          </div>
        </aside>
      </section>
    </header>
  );
}
