import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #444;
  border-radius: 10px;
  color: white;
  padding: 16px;
  position: absolute;
  left: ${props => props.left}px;
  bottom: 20px;
  z-index: 999;
  transition: left 0.5s ease;
  opacity: 0.8;
`;

export default class Notification extends React.Component {
  render() {
    return <Container left={this.props.left}>{this.props.msg}</Container>;
  }
}
