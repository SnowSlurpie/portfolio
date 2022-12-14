import React from "react";
import Card from "react-bootstrap/Card";
import { GiSevenPointedStar} from "react-icons/gi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="color">Alex Running </span>
            from <span className="color"> Osceola, Wisconsin</span>
            <br />I am a full stack developer with a passion for building applications that are user friendly and easy to use.
            <br />
            <br />
            Apart from coding, some other activities that I love to do include:
          </p>
          <ul>
            <li className="about-activity">
              <GiSevenPointedStar /> Kayaking
            </li>
            <li className="about-activity">
              <GiSevenPointedStar /> Traveling with my family
            </li>
            <li className="about-activity">
              <GiSevenPointedStar /> Playing Videogames
            </li>
          </ul>
{/* Try to remember how to make these 3 appear in slowly one at a time over a few seconds */}
          <p>
            "The best thing about a boolean is even if you are wrong, you are only off by a little bit."{" "}
          </p>
          <footer className="blockquote-footer">Anonymous</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;