import React from "react";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import './Btn.css';

const BtnGithub = () => {
  return (
    <div>
      <Button color="link">
        <a
          href="https://github.com/CzerwonyV/QR-Czer"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <FontAwesomeIcon icon={faGithubSquare} className="IconBackground"/>
        </a>
      </Button>
    </div>
  );
};

export default BtnGithub;
