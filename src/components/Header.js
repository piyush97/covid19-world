import React from "react";
import { FaGithub } from "react-icons/fa";

import Container from "components/Container";

const Header = () => {
  return (
    <header>
      <Container type="content">
        <p>Covid 19 World</p>
        <ul>
          <li>
            <a href="https://github.com/piyush97/covid19-world">
              {" "}
              <FaGithub /> Github
            </a>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
