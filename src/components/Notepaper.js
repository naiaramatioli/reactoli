import React from "react";
import styled from "styled-components";

const Paper = styled.div`
  font-family: "Homemade Apple", cursive;
  font-size: 24px;
  position: relative;
  margin: 80px auto;
  padding: 44px 20px 20px 45px;
  max-width: 980px;
  width: 95%;
  line-height: 34px;
  color: #6a5f49;
  text-shadow: 0 1px 1px white;
  background-color: #f2f6c1;
  background-image: -webkit-radial-gradient(
      center,
      cover,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.1) 90%
    ),
    -webkit-repeating-linear-gradient(top, transparent, transparent 33px, rgba(
            239,
            207,
            173,
            0.7
          )
          33px, rgba(239, 207, 173, 0.7) 34px);
  background-image: -moz-radial-gradient(
      center,
      cover,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.1) 90%
    ),
    -moz-repeating-linear-gradient(top, transparent, transparent 33px, rgba(
            239,
            207,
            173,
            0.7
          )
          33px, rgba(239, 207, 173, 0.7) 34px);
  background-image: -o-radial-gradient(
      center,
      cover,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.1) 90%
    ),
    -o-repeating-linear-gradient(top, transparent, transparent 33px, rgba(
            239,
            207,
            173,
            0.7
          )
          33px, rgba(239, 207, 173, 0.7) 34px);
  border: 1px solid #c3baaa;
  border-color: rgba(195, 186, 170, 0.9);
  box-sizing: border-box;
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.5), inset 0 0 5px #d8e071,
    0 0 1px rgba(0, 0, 0, 0.1), 0 2px rgba(0, 0, 0, 0.02);

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
  }
  &:before {
    left: 28px;
    width: 2px;
    border: solid #efcfad;
    border-color: rgba(239, 207, 173, 0.9);
    border-width: 0 1px;
  }
  &:after {
    z-index: -1;
    left: 0;
    right: 0;
    background: rgba(242, 246, 193, 0.9);
    border: 1px solid rgba(170, 157, 134, 0.7);
    transform: rotate(2deg);
  }
`;

const Title = styled.h1`
  font-weight: bold;
  text-align: center;
  margin-bottom: 34px;
`;

const Quote = styled.div`
  quotes: "“" "”" "‘" "’";

  p {
    text-indent: 2em;
  }

  &:before,
  &:after {
    font-family: Georgia, serif;
    display: inline-block;
    vertical-align: top;
    height: 30px;
    line-height: 0.9em;
    font-size: 92px;
    opacity: 0.2;
  }
  &:before {
    content: open-quote;
    margin-right: 4px;
    margin-left: -8px;
  }
  &:after {
    content: close-quote;
    margin-left: 4px;
    margin-right: -8px;
  }
`;

const Author = styled.div`
  text-align: right;
`;

export default class Notepaper extends React.Component {
  render() {
    return (
      <Paper>
        <Title>{this.props.title}</Title>
        <Quote>{this.props.children}</Quote>
        <Author> — {this.props.author}</Author>
      </Paper>
    );
  }
}
