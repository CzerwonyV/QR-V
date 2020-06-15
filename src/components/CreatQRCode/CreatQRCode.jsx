import React, { Component } from "react";
import QRCode from "qrcode.react";
import BtnHome from "../BtnLink/BtnHome";
import { InputGroup, InputGroupText, InputGroupAddon, Input } from "reactstrap";
import "./CreatQRCode.css";

const dontUse = "";

class CreatQRcode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    !event.target.value.includes(dontUse)
      ? this.setState({ title: event.target.value })
      : this.setState({ title: event.target.value.replace(dontUse, "") });
  }

  render() {
    return (
      <div className="CreatQRcodeContent">
        <div className="BtnHomeCreatQR">
          <BtnHome />
        </div>
        <div className="InputCreatQrCodeContent">
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText id="InputCreatQrCode">Le contenu du QR Code :</InputGroupText>
            </InputGroupAddon>
            <Input
              id="title"
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </InputGroup>
        </div>
        <div className="InputCreatQrCodeContentMobile">
          <InputGroupText id="InputCreatQrCode">Le contenu du QR Code :</InputGroupText>
          <Input
            id="InputQRcode"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </div>
        <div className="QRcodeImg">
          <QRCode value={this.state.title} className="QrCode" />
        </div>
      </div>
    );
  }
}

export default CreatQRcode;
