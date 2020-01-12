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
  <div className="card" style={{background: '#10788a', margin: '2em'}}>
    <img src={props.background} className="card-img-top" alt="Daniel Toro Mood Music App" />
    <div className="card-header">
    <h2 style={text} > {props.title} </h2>
    </div>
    <div style={{margin: '2em'}}>

      <p style={text} > {props.text} </p>
    </div>
    <div style={division2}>


    </div>
  </div>
)

var division = {
  width: '50%',
  padding: '1em',
  display: 'inline-block'
}

var division2 = {
  display: 'inline-block'
}

var imagestyle = {
  maxWidth: '20em'

}


var text = {
  color: '#ffffff',
  fontFamily: 'sans-serif'
}
