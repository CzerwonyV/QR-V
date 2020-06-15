import React from "react";
import {
    Button,
} from 'reactstrap';
import './Btn.css';

const BtnDocCreat = () => {
    return (
        <div>
        <Button>
          <a
            href="https://www.npmjs.com/package/qrcode.react"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            Doc qrcode.react
          </a>
        </Button>
      </div>
    );
};

export default BtnDocCreat;