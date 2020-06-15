import React from "react";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './Btn.css';

const BtnLinkedin = () => {
  return (
    <div>
      <Button color="link">
        <a
          href="https://www.linkedin.com/in/victor-veyrier-ab6948194"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <FontAwesomeIcon icon={faLinkedin} className="IconBackground"/>
        </a>
      </Button>
    </div>
  );
};

export default BtnLinkedin;
