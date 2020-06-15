import React from "react";
import {
    Button,
  } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
  } from '@fortawesome/free-solid-svg-icons';
import {
    Link
  } from "react-router-dom";
import './Btn.css';

const BtnHome = () => {
  return (
    <div>
        <Button id="HomeBtn"><Link to="/"><FontAwesomeIcon icon={faHome} /></Link></Button>
    </div>
  );
};

export default BtnHome;