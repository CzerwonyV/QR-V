import React from "react";
import { Button } from "reactstrap";
import './Btn.css';

const BtnDocRead = () => {
  return (
    <div>
      <Button>
        <a
          href="https://www.npmjs.com/package/react-qr-reader"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          Doc react-qr-reader
        </a>
      </Button>
    </div>
  );
};

export default BtnDocRead;
