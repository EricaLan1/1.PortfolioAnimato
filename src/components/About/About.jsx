import React from 'react'
import "./About.css"
import Card from "../Card/Card"
import jsiicona from "../../assets/jsiicona.png"
import front from "../../assets/front.png"
import sql from "../../assets/sql.png"
import {useGSAP} from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)
function About() {
  useGSAP(()=>{
    gsap.from(".circle",{
      x:-100,
      duration:5,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".circle",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"
      }
    })

    gsap.from(".line",{
      x:-100,
      duration:5,
      opacity:0,
      stagger:2,
      scrollTrigger:{
        trigger:".line",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"
      }
    })
    
    gsap.from(".aboutdetails h1",{
      x:-100,
      duration:5,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".aboutdetails h1",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"
      }
    })

    gsap.from(".rightabout",{
      x:100,
      duration:10,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".rightabout",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"
      }
    })

    gsap.from(".aboutdetails ul",{
      y:-100,
      duration:10,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".aboutdetails ul",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"
      }
    })
  })

  return (
    <div id="about">
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
      <div className="aboutdetails">
        <div className="personalinfo">
          <h1>Informazioni Personali</h1>
          <ul>
            <li>
              <span>NOME</span> : ERICA LANDOLFO
            </li>
            <li>
              <span>ETA'</span> : 27 ANNI
            </li>
            <li>
              <span>DATA DI NASCITA</span> : 07/01/200
            </li>
            <li>
              <span>GENERE</span> : FEMMINA
            </li>
            <li>
              <span>LINGUA</span> : ITALIANO, INGLESE
            </li>
          </ul>
        </div>
        <div className="education">
          <h1>Formazione</h1>
          <ul>
            <li>
              <span>TITOLO DI STUDIO</span> : DIPLOMA
            </li>
            <li>
              <span>IN</span> : GRAFICA E COMUNICAZIONE
            </li>
            <li>
              <span>ANNO</span> : 2018
            </li>
          </ul>
        </div>
        <div className="skills">
          <h1>Competenze</h1>
          <ul>
            <li>
              JAVA & SPRING DEVELOPER
            </li>
            <li>
              REACT FRONT-END DEVELOPER
            </li>
            <li>
              DATABASE & TOOLS
            </li>
          </ul>
        </div>
      </div>
      </div>
      <div className="rightabout">
        <Card title="JAVA & SPRING DEVELOPER" image={jsiicona}/>
        <Card title="REACT FRONT-END DEVELOPER" image={front}/>
        <Card title="DATABASE & TOOLS" image={sql}/>
      </div>
    </div>
  )
}

export default About