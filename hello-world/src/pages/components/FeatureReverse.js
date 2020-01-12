import React from "react"
import posed from 'react-pose'

const Box = posed.div({
  hoverable: true,
      init: {
        scale: 1,
        backgroundColor: '#598aa2',
        marginBottom: '2em'
      },
      hover: {
        backgroundColor: '#01a2d2'
      }
});

export default props => (
  <Box>
  <div style={division2}>
    <img style={imagestyle} src={props.background}>
    </img>
  </div>
    <div style={division}>
      <h2 style={text} > {props.title} </h2>
      <p style={text} > {props.text} </p>
    </div>

  </Box>
)

var division = {
  width: '50%',
  padding: '1em',
  display: 'inline-block'
}

var division2 = {
  padding: '1em',
  display: 'inline-block'
}

var imagestyle = {
  maxWidth: '20em'

}


var text = {
  color: '#ffffff',
  fontFamily: 'sans-serif'
}
