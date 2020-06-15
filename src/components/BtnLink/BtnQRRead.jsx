import React from "react";
import {
    Button,
  } from 'reactstrap';
import {
    Link
  } from "react-router-dom";
import './Btn.css';

const BtnQRRead = () => {
  return (
    <div>
        <Button className="BtnTop"><Link to="/QRCodeReader">Lire un QR Code</Link></Button>
    </div>
  );
};

export default BtnQRRead;