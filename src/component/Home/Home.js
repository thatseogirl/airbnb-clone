import React, { useState } from "react";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Inspiration from "../Inspiration/Inspiration";
import "./Home.css";

export default function Home() {
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    let prevScrollpos = window.pageYOffset;
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navscroll").style.display = "inline";
    } else {
      document.getElementById("navigation").style.display = "none";
    }
    prevScrollpos = currentScrollPos;

    setScroll(scroll);
  };
  return (
    <main className="main">
      <Header handleScroll={handleScroll} />
      <Body />
      <Inspiration />
    </main>
  );
}
