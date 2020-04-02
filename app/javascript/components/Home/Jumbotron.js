import React, { Component } from "react";
import styled from "styled-components";

const Section = styled.section`
  background-color: #4169e1;
  min-height: 100px;
  padding: 100px 0;
  color: #fff;
`;

const Header = styled.h1`
  color: #fff;
  font-weight: 700;
  font-size: 40px;
  line-height: 52px;
`;

const Subhead = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

const Button = styled.a`
  display: inline-block;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0;
  background: #fff;
  color: #333 !important;
  padding: 10px 20px;
  font-size: 18px;
  //width: 100%;
  box-shadow: 0px 0px 0px 3px #473228, -6px 6px #ef5f17, -6px 6px 0px #473228;
`;

const Jumbotron = () => {
  return (
    <Section className="home-section--1">
      <div className="container">
        <div className="row">
          <div className="col col-sm-12 col-md-5">
            <div className="pt-4 mt-4">
              <Header>Boggle</Header>
              <Subhead>
                Boggle is one of the most popular word search games.
              </Subhead>
            </div>
          </div>
          <div className="col col-sm-12 col-md-7">
            <div className="pt-4 mt-4 text-left">
              The rules are simple. You have to find as many words as possible
              on the grid. You can move from one letter (dice) to another if it
              is a neighbour (in all directions). You cannot use a letter (dice)
              more than once in a word. You get points for each word - the more
              letters the better. The puzzle is solved when you collect 30%, 60%
              or 90% of the total possible points depending on the difficulty.
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Jumbotron;
