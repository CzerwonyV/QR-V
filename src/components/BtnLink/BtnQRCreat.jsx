import React from "react";
import {
    Button,
  } from 'reactstrap';
import {
    Link
  } from "react-router-dom";
import './Btn.css';

const BtnQRCreat = () => {
  return (
    <div>
        <Button className="BtnTop"><Link to="/CreatQRcode">Créer un QR Code</Link></Button>
    </div>
  );
};

export default BtnQRCreat;