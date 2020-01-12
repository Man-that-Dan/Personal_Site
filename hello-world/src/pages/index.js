import React from "react"
import posed from 'react-pose'
import Header from "./components/Header"
import Feature from "./components/Feature"
import FeatureReverse from "./components/FeatureReverse"
import SideBar from "./components/SideBar"
import NavBar from "./components/NavBar"
import Github from "../../static/GitHub.png"
import LinkedIn from "../../static/LinkedIn.png"
import Mood from "../../static/Screen_Shot2.png"

import Secret_Door from "../../static/Screen_Shot1.png"
import Particles from 'react-particles-js'
import "./App.css"

export default () => (
  <div style={{}}>

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
    <SideBar image={Github} image2={LinkedIn} link1={gitLink} link2={linkedin}/>
    <NavBar/>

    <a name="about"></a>
    <Particles canvasClassName="particleContainer"
    params={{
      interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: true,
              mode: "repulse"
            },
            onclick: {
              enable: false,
              mode: "bubble"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 100,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
    }}
    />
    <div className="card" style={Hero} >

      <h2 style={HeroTitle}> Hello </h2>
      <p style={HeroText}> I'm Daniel Toro. I am a recent Computer Science grad from Clemson University.<br></br> <br></br> I chose Computer Science because
      I'm curious and creative by nature and enjoy solving interesting problems. Some languages I have experience with are:
      C, C++, Java, PHP, Python, Javascript, as well as HTML and CSS. I would overall say PHP, C++, and Python are my strongest. However, I am constantly seeking
      new technologies and skills to experiment with. In addition, I have experience with Node.js, React, Angular, Redis, MySQL, Gatsby.js
       (what I used to build this site). My professional experience includes using PHP frameworks like Magento along with a large MySQL database to manage E-commerce sites. <br></br> <br></br> When I'm not googling interesting things I'm reading, tinkering with electronics,
       playing volleyball, swing dancing,
      or rewatching any of the Marvel Movies. <br></br> <br></br>
      Currently I am searching for my next challenge in a full time position.  </p>
    </div>

    <h2 style={Division}> Featured Projects </h2>
    <a name="projects"></a>
    <div style={MainColumn}>

      <Feature title="Mood-Music" text={text1} background={Mood}/>
      <Feature title="Secret Door" text={text2} background={Secret_Door}/>
      <div className="card" style={Hero}>
        <a name="contact"></a>
        <h2 style={HeroTitle}> Contact </h2>
        <p style={HeroText}> View these and my other projects on my github at https://github.com/Man-that-Dan or by clicking on the GitHub
        icon in the sidebar.  <br></br> <br></br> I'm always happy to talk about all things Computer Science, Tech, or Electronics.
        Feel free to get in touch! Currently, I am also searching for a full time position that will challenge me and expand my skills in the field.
        <br></br> <br></br>Email me at dantoro1995@gmail.com. I look forward to hearing from you!</p>
      </div>

    </div>


  </div>



)

var gitLink = 'http://github.com/Man-that-Dan'

var linkedin = 'https://www.linkedin.com/in/daniel-toro-21910512a/'

var text1 = <p>This is a React powered app using a Node.js backend and Spotify's api. App accesses user's playlists and allows users to see data about playlist and tracks,
 sort by a specific attribute, and play music. In order to use the app,
  a user must have a Spotify account.
  To see app, go to <a target="_blank" href='http://3.16.80.246:3000'>http://3.16.80.246:3000</a> or
   see it on my github <a target="_blank" href='https://github.com/Man-that-Dan/Mood-Music'>here</a></p>

var text2 = <p> Secret Door is a top down dungeon crawler. The objective is to
 escape the labyrinth that you find yourself in. Problem is the door is locked.
 Your objective is to search the labyrinth, figure out how to open the door,
  and escape. All while fending off the undead. Project created for
  2D Game development class at Clemson University. Project uses several design
  patterns including Singleton, Observer pattern, and object pool pattern. See it on
  my github account <a target="_blank" href='https://github.com/Man-that-Dan/Secret-Door'>here</a> </p>

var MainColumn = {
  margin: '3em'
}

var Hero = {
  margin: '4em',
  background: '#1c3942cf',
  padding: '2em',
  display: 'inline-block'
}

var Contact = {
  marginTop: '5em',
  minHeight: '24em'
}

var HeroTitle = {
  color: '#ffffff',
  fontFamily: 'sans-serif'
}

var Division = {
  color: '#ffffff',
  fontFamily: 'sans-serif',
  margin: '2em'
}

var HeroText = {
  color: '#ffffff',
  fontFamily: 'sans-serif'
}
