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
import AutoBot from "../../static/babys_first_autonomous_vehicle.gif"
import GripperArm from "../../static/gripper_arm.gif"

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
      <p style={HeroText}> I'm Daniel Toro. I'm a Computer Science grad from Clemson University, a Software Engineer, and perpetual tinkerer.<br></br> <br></br> I chose Computer Science because
      I'm curious and creative by nature I wanted to maximize my exposure to interesting, complex problems. I have experience with are:
      C, C++, Java, PHP, Python, are my top top languages. I have backend, frontend, AWS experience and an interest in all things robotics and electronic, or space related. I am constantly seeking
      new technologies and skills to experiment with. I believe technology, used morally, can revolutionize people's lives for the better. <br></br> <br></br> When I'm not googling interesting things I'm reading, tinkering with electronics,
       playing volleyball, flying planes, or swing dancing,
      or rewatching any of the Marvel Movies (Spider-Man is #1). <br></br> <br></br>
      I'm always looking to learn more about robotics, embedded programming, or science and technology in general. Feel free to check out my projects and reach out to chat.</p>
    </div>

    <h2 style={Division}> Featured Projects </h2>
    <a name="projects"></a>
    <div style={MainColumn}>

      <Feature title="Smart RC Car" text={text3} background={AutoBot}/>
      <Feature title="Gripper Arm" text={text4} background={GripperArm}/>
      <Feature title="Secret Door" text={text2} background={Secret_Door}/>
      <Feature title="Mood-Music" text={text1} background={Mood}/>  
      <div className="card" style={Hero}>
        <a name="contact"></a>
        <h2 style={HeroTitle}> Contact </h2>
        <p style={HeroText}> View these and my other projects on my github at https://github.com/Man-that-Dan or by clicking on the GitHub
        icon in the sidebar.  <br></br> <br></br> I'm always happy to talk about all things Computer Science, Tech, or Electronics.
        Feel free to get in touch!
        <br></br> <br></br>Email me at dantoro1995@gmail.com. I look forward to hearing from you!<br></br><br></br><br></br><br></br>
        "The man is a success who has lived well, laughed often, and loved much; who has gained the respect of intelligent men and the love of children;
         who has filled his niche and accomplished his task; who leaves the world better than he found it,
          whether by an improved poppy, a perfect poem, or a rescued soul; who never lacked appreciation of earth's beauty
           or failed to express it; who looked for the best in others and gave the best he had." -Robert Louis Stevenson</p>
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

var text3 = <p>This a toy rc car converted to be controlled by a raspberry pi with an LN298 dual H-bridge and a camera module.
  It uses OpenCV and CvBridge to process images from the camera and find the blue "lanes" in order to calculate 
  the heading to navigate between them. Uses ROS2 nodes. This was a fun project, and inspired me to build more autonomous vehicles.
  Currently I'm working on an autonomous ROS2 mower for my parents (but really its for me so I don't have to mow the lawn when I visit).
  See it on my github <a target="_blank" href='https://github.com/Man-that-Dan/smart_rc_car_bringup'>here</a></p>

var text4 = <p>This is DiyMore brand 6dof arm to which I added a 3d printed vacuum gripper to pick up and sort
  papers. For this project I developed a custom driver package with a kinematics service. I also developed a controller node 
  to be used with MQTT bridge to listen to topics coming from an MQTT broker and report back robot state. 
  See the low level control package on my github <a target="_blank" href='https://github.com/Man-that-Dan/dm_arm_control'>here</a> and 
  the high level control package <a target="_blank" href='https://github.com/Man-that-Dan/arm_action_executor'>here</a></p>

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
