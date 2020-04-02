import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";

const TABLE = styled.table`
  font-weight: 700;
  border-collapse: collapse;
  color: black;
  height: 200px;
  width: 200px;
`;

const TR = styled.tr`
  border: 1px solid black;
`;

const TD = styled.td`
  border: 1px solid black;
  width: 25%;
  text-align: center;
  //cursor: pointer;
  :hover {
    background-color: green;
    cursor: pointer;
  }
`;

const Button = styled.button`
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

const Clearbtn = styled.button`
  display: inline-block;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0;
  background: #fff;
  color: #333 !important;
  padding: 10px 20px;
  font-size: 18px;
  width: 100px;
  box-shadow: 0px 0px 0px 3px #473228, -6px 6px #ef5f17, -6px 6px 0px #473228;
  position: relative;
  left: 125px;
  top: -75px;
`;

const Msg = styled.span`
  display: inline-block;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0;
  background: green;
  color: white !important;
  padding: 10px 20px;
  font-size: 22px;
  width: 100%;
  box-shadow: 0px 0px 0px 3px #473228, -6px 6px #ef5f17, -6px 6px 0px #473228;
`;

class GameLoad extends Component {
  prevData = 0;
  currData = 0;
  isStart = true;

  constructor(props) {
    super(props);

    let rollBoard = [];
    let alphabets = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
    let cellId = "";

    for (let i = 0; i < 4; i++) {
      let children = [];
      //Inner loop to create children
      for (let j = 0; j < 4; j++) {
        let random = parseInt(Math.random() * alphabets.length);
        var rowData = alphabets.charAt(random);
        children.push({ rowData });
      }
      //Create the parent and add the children
      rollBoard.push({ children });
    }

    this.state = {
      //state is by default an object
      rollBoard: rollBoard,
      count: 0,
      boggleWord: "",
      clickedData: "",
      validWords: [],
      totalScore: 0,
      scoredWords: []
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.count !== 120) {
        this.setState(({ count }) => ({ count: count + 1 }));
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleRowClick(rowValue) {
    if (this.state.count === 120) {
      toast.info(
        `Game Over, allocated 120 second finished. 
        Your final score is ${this.state.totalScore}. 
        To play again, please click on Reset button.`
      );
      return;
    }

    const clickedData = "";
    this.setState({
      clickedData: [...this.state.clickedData, event.target.id]
    });

    const data = rowValue.rowData === "Q" ? "Qu" : rowValue.rowData;
    this.setState(({ boggleWord }) => ({ boggleWord: boggleWord + data }));
  }

  renderTableData() {
    return this.state.rollBoard.map((board, index) => {
      let row = 0;
      let col = 1;
      row = index + 1;
      col = index * 10;
      return (
        <TR key={row}>
          <TD
            id={col + 0}
            onClick={() => this.handleRowClick(board.children[0])}
          >
            {board.children[0].rowData === "Q"
              ? "Qu"
              : board.children[0].rowData}
          </TD>
          <TD
            id={col + 1}
            onClick={() => this.handleRowClick(board.children[1])}
          >
            {board.children[1].rowData === "Q"
              ? "Qu"
              : board.children[1].rowData}
          </TD>
          <TD
            id={col + 2}
            onClick={() => this.handleRowClick(board.children[2])}
          >
            {board.children[2].rowData === "Q"
              ? "Qu"
              : board.children[2].rowData}
          </TD>
          <TD
            id={col + 3}
            onClick={() => this.handleRowClick(board.children[3])}
          >
            {board.children[3].rowData === "Q"
              ? "Qu"
              : board.children[3].rowData}
          </TD>
        </TR>
      );
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    let wordlength = this.state.boggleWord ? this.state.boggleWord.length : 0;

    //ONLY WORD COUNT GREATER THEN 3 IS ALLOWED
    if (wordlength >= 3) {
      //IF SAME WORD IS USED THEN ERROR MESSAGE IS REUTRNED FOR DUPLICATE WORD.
      if (this.state.scoredWords.length > 0) {
        if (this.state.scoredWords.indexOf(this.state.boggleWord) > -1) {
          toast.error("Same word has been used previously, try another word.");
          this.setState({ boggleWord: "" });
          return;
        }
      }

      //CREATE STRING OF LETTERS IN BOARD.
      let boardLetter = "";
      this.state.rollBoard.map((board, index) => {
        boardLetter =
          boardLetter +
          board.children[0].rowData +
          board.children[1].rowData +
          board.children[2].rowData +
          board.children[3].rowData;
      });

      //CALLING RAILS API TO GET THE LIST OF VALID WORS FROM THE CURRENT BOARD LETTERS
      axios
        .get(`/validword?boggleSet=${boardLetter}`)
        .then(response => {
          this.setState({ validWords: response.data });

          //CHECK FROM ARRAY OF VALID WORD WITH THE ENTERED WORD FROM USER IF ITS VALID AND
          //IF THE SELECTED LETTERS ARE AS PER THE RULE OF NEIGHBOUR CELLS
          if (this.state.validWords.indexOf(this.state.boggleWord) > -1) {
            this.setState(({ totalScore }) => ({
              totalScore: totalScore + this.handleScore(wordlength)
            }));

            this.setState({
              scoredWords: [
                ...this.state.scoredWords,
                this.state.scoredWords.length > 0 ? ", " : "",
                this.state.boggleWord
              ]
            });
          } else {
            toast.error("Enter word is not valid, please try another");
          }
          this.setState({ boggleWord: "" });
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      toast.error(
        "Please enter word with lenght greater or equal to three letters."
      );
    }
  }

  //GET SCORE BASED ON THE WORD LENGTH MATCHED
  handleScore(wordlength) {
    switch (wordlength) {
      case 3:
        return 1;
      case 4:
        return 1;
      case 5:
        return 2;
      case 6:
        return 3;
      case 7:
        return 5;
      default:
        return 11;
    }
  }

  handleChange(event) {
    const data = event.target.value === "Q" ? "Qu" : event.target.value;
    this.setState({ boggleWord: data });
  }

  clearInput() {
    event.preventDefault();
    this.setState({ boggleWord: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="pt-4 pb-4">
          <div className="col-md-10 offset-md-1">
            <div className="card px-5">
              <div className="row">
                <div className="col-md-12">
                  <div>Timer: {this.state.count}</div>
                  <div>Total Score: {this.state.totalScore}</div>
                  <div>Matched Words: {this.state.scoredWords}</div>
                </div>
                <div className="col-md-4">
                  <div className="pt-1 pb-1">&nbsp;</div>
                  <TABLE id="rollBoard">
                    <tbody>{this.renderTableData()}</tbody>
                  </TABLE>
                </div>
                <div className="col-md-8">
                  <div className="pt-4 pb-4">
                    <div className="cta-wrapper">
                      <Button onClick={() => window.location.reload(false)}>
                        RESET
                      </Button>
                    </div>
                  </div>
                  <div className="pt-4 pb-4">
                    <div className="cta-wrapper">
                      <label>
                        Enter Word:&nbsp;
                        <input
                          type="text"
                          name="boggleWord"
                          value={this.state.boggleWord}
                          onChange={this.handleChange.bind(this)}
                          readOnly="readOnly"
                        />
                        <input
                          type="hidden"
                          name="clickedData"
                          value={this.state.clickedData}
                          onChange={this.handleChange.bind(this)}
                          readOnly="readOnly"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="pt-4 pb-4">
                    <div className="cta-wrapper">
                      <Button disabled={this.state.count === 120}>
                        Submit
                      </Button>
                    </div>
                  </div>
                  <div className="cta-wrapper">
                    <Clearbtn onClick={this.clearInput.bind(this)}>
                      Clear
                    </Clearbtn>
                  </div>
                </div>
                {this.state.count === 120 ? (
                  <div className="col-md-12">
                    <div>
                      <Msg>
                        Game Over, allocated 120 second finished. Your final
                        score is {this.state.totalScore}. To play again, please
                        click on Reset button.
                      </Msg>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="row">
                <div className="pt-4 pb-4"></div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default GameLoad;
