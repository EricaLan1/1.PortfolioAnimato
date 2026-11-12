
import React from 'react'
import Card from "../Card/Card"
import "./Projects.css"
import cinema from "../../assets/cinema.png"
import portfolio from "../../assets/portfolio.png"

const projects = [
  { title: "SIEDITI & GUARDA", image: cinema },
  { title: "PORTFOLIO", image: portfolio },
  { title: "PROGETTO 3", image: null },
  { title: "PROGETTO 4", image: null },
  { title: "PROGETTO 5", image: null },
]

function Projects() {
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
