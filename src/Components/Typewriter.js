import React from "react";
import { Container } from "react-bootstrap";
import Typewriter from "typewriter-effect"

function Typerwriter() {
  return <>
  <div className="Typewriter">
    <Container>
  <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Hello There!")
            .pauseFor(2000)
            .deleteAll()
            .typeString("Welcome to OIS_MEDIA")
            .pauseFor(2000)
            .deleteAll()
            .typeString("What do yo need?")
            .start();
        }}
      />
      </Container>
      </div>
  </>;
}

export default Typerwriter;
