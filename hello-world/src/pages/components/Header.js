import React from "react"
import posed from 'react-pose'

const navi = posed.div({
  hoverable: true,
      init: {
        scale: 1,
      },
      hover: {
        scale: 1.1,
      }
});

export default props => (
  <div style={headerStyle}>
    <h1 style={titleStyle} >D <p style={secondStyle}>Toro</p></h1>
    <div style={navbox}>
    
    </div>
  </div>
)

var headerStyle = {
  backgroundColor: '#088494'
}

var titleStyle = {
display: 'inline',
color: '#ffffff',
fontFamily: 'sans-serif',
padding: '2%',
fontWeight: '100',
marginRight: '35%'
}

var secondStyle = {
  display: 'inline',
  fontWeight: 'bold'
}

var navbox = {
  display: 'inline-block'
}

var NavStyle = {
  display: 'inline',
  fontFamily: 'sans-serif',
  align: 'right',
  margin: '5px',
  color: '#f3f3f3'
}
