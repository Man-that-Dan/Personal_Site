import React from "react"
import posed from 'react-pose'


const Nav = posed.p({
  hoverable: true,
      init: {
        color: '#598aa2',
        transform: 'rotateZ(90deg)'
      },
      hover: {
        color: '#79aac2',

      }
});

export default props => (
  <div style={barStyle}>
    <a href="#about">
    <Nav >About</Nav>
    </a>
    <br></br>
    <p style={NavStyle}> - </p>
    <a href="#projects">
    <Nav >Projects</Nav>
    </a>
    <br></br>
    <p style={NavStyle}> - </p>
    <a href="#contact">
    <Nav >Contact</Nav>
    </a>
  </div>
)
var NavStyle = {
  transform: 'rotateZ(90deg)'
}

var imageStyle = {
  height: '2em',
  width: '2em',
}

var barStyle = {
  width: '2em',
  position: 'fixed',
  bottom: '30px',
  right: '0',
  margin: '5px',
  padding: '2px',
  zIndex: '1000'

}
