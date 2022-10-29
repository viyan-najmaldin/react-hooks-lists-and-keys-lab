import React from "react";

function NavBar(props) {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      <a key={props.id} href="#home">
        home
      </a>
      <a key={props.id} href="#about">
        about
      </a>
      <a key={props.id} href="#projects">
        projects
      </a>
    </nav>
  );
}

export default NavBar;
