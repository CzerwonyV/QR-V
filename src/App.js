import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import CreatQRcode from "./components/CreatQRCode/CreatQRCode";
import QRCodeReader from "./components/QrCodeReader/QRCodeReader";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/QRCodeReader">
            <QRCodeReader />
          </Route>
          <Route path="/CreatQRcode">
            <CreatQRcode />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
