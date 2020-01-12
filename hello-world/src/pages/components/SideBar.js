import React from "react"
import posed from 'react-pose'


const Box = posed.div({
  hoverable: true,
      init: {
        scale: 1,
        backgroundColor: '#ffffff'
      },
      hover: {
        scale: 1.1
      }
});

export default props => (
  <div style={barStyle}>
    <Box style={linkStyle} ><a target="_blank" href={props.link1} ><img style={imageStyle} src={props.image}></img></a></Box>
    <br></br>
    <Box style={linkStyle} ><a target="_blank" href={props.link2} ><img style={imageStyle} src={props.image2}></img></a></Box>
  </div>
)
var linkStyle = {
  height: '2em',
  width: '2em',
  backgroundSize: 'cover',
  borderRadius: '50%'
}

var imageStyle = {
  height: '2em',
  width: '2em',
}

var barStyle = {
  width: '2em',
  height: '3em',
  position: 'fixed',
  bottom: '40px',
  left: '0',
  margin: '5px',
  padding: '2px',
  zIndex: '1000'

}
