import React, { Component } from "react";
import Jumbotron from "./Jumbotron";
import GameLoad from "./GameLoad";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <ToastContainer autoClose={3000} hideProgressBar />
        <Jumbotron />
        <GameLoad />
      </div>
    );
  }
}

export default Home;
