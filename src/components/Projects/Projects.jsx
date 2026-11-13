
import React from 'react'
import Card from "../Card/Card"
import "./Projects.css"
import cinema from "../../assets/cinema.png"
import portfolio from "../../assets/portfolio.png"
import {useGSAP} from "@gsap/react"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

const projects = [
  { title: "SIEDITI & GUARDA", image: cinema },
  { title: "PORTFOLIO", image: portfolio },
  { title: "PROGETTO 3", image: null },
  { title: "PROGETTO 4", image: null },
  { title: "PROGETTO 5", image: null },
]

function Projects() {
  useGSAP(() => {
    gsap.from("#titoloproj", {
      y: 100,
      duration: 10,
      opacity: 0,
      scrollTrigger: {
        trigger: "#titoloproj",
        scroller: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 30%"
      }
    })
  })

  return (
    <div id="projects">
      <h1 id="titoloproj">1 ANNO DI ESPERIENZA IN PROGETTI</h1>

      <div className="slider">
        <div className="slider-track">
          {[...projects, ...projects].map((project, index) => (
            <Card key={index} title={project.title} image={project.image}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
