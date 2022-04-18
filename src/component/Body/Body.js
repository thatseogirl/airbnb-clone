import React from "react";
import "./Body.css";
import { Card } from "react-bootstrap";

export default function Body() {
  return (
    <div className="body">
      <h2 className="bodytext">Inspiration for your next trip</h2>
      <section className="card-section">
        <Card className="card1">
          <Card.Img
            className="cardimg"
            variant="top"
            src="https://a0.muscache.com/im/pictures/a980c3d9-b87a-4bfb-a4ba-36db9f7edad5.jpg?im_w=480"
          />
          <Card.Body className="amsterdam">
            <Card.Title className="title">Amsterdam</Card.Title>
            <Card.Text className="titlechild">2 Kilometers away.</Card.Text>
          </Card.Body>
        </Card>
        <Card className="card1">
          <Card.Img
            className="cardimg"
            variant="top"
            src="https://a0.muscache.com/im/pictures/54582c41-77ef-4f41-aa88-6a4ed0068f4b.jpg?im_q=highq&amp;im_w=720"
          />
          <Card.Body className="putten">
            <Card.Title className="title">Putten</Card.Title>
            <Card.Text className="titlechild">48 Kilometers away.</Card.Text>
          </Card.Body>
        </Card>
        <Card className="card1">
          <Card.Img
            className="cardimg"
            variant="top"
            src="https://a0.muscache.com/im/pictures/a433b4d0-8183-4523-b4c5-99b81c5729c1.jpg?im_w=480"
          />
          <Card.Body className="groneing">
            <Card.Title className="title">Groningen</Card.Title>
            <Card.Text className="titlechild">147 Kilometers away.</Card.Text>
          </Card.Body>
        </Card>
        <Card className="card1">
          <Card.Img
            className="cardimg"
            variant="top"
            src="https://a0.muscache.com/im/pictures/2ce0594a-fe5c-4d88-b120-b91ff7456c1f.jpg?im_w=480"
          />
          <Card.Body className="otterio">
            <Card.Title className="title">Otterlo</Card.Title>
            <Card.Text className="titlechild">67 Kilometers away.</Card.Text>
          </Card.Body>
        </Card>
      </section>

      <section className="discover">
        <h2>Discover Airbnb Experiences</h2>
        <div className="experiences">
          <aside className="trip">
            <div className="triptext">
              <p>Things to do on your trip</p>
              <button>Experiences</button>
            </div>
          </aside>
          <aside className="home">
            <div className="triptext">
              <p>Things to from home</p>
              <button>Online Experiences</button>
            </div>
          </aside>
        </div>
      </section>

      <section className="giftcard">
        <div className="shop">
          <h2>Shop Airbnb gift cards</h2>
          <button>Learn more</button>
        </div>
        <div className="giftimg">
          <img
            src="https://a0.muscache.com/im/pictures/1ca4a497-ba40-4429-be1c-ac6abe4209c6.jpg?im_w=1200"
            alt="gift-card"
            className="gift"
          />
        </div>
      </section>

      <section className="superhost">
        <div className="ask">
          <h2 className="question">Questions about hosting?</h2>
          <button className="questionbtn">Ask a Superhost</button>
        </div>
      </section>
    </div>
  );
}
