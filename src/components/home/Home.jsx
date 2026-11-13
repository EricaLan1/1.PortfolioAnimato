import React from 'react'
import "./Home.css"
import woman from "../../assets/woman.png"
import { useState, useEffect } from 'react'
import gsap from "gsap"
import {useGSAP} from "@gsap/react"

function TypingEffect({ text, speed, eraseSpeed, eraseDelay, cursor }) {
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = text[textIndex]

    let timeout

    if (!isDeleting) {
      if (charIndex < currentText.length) {
        timeout = setTimeout(() => {
          setCharIndex(charIndex + 1)
        }, speed)
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true)
        }, eraseDelay)
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setCharIndex(charIndex - 1)
        }, eraseSpeed)
      } else {
        setIsDeleting(false)
        setTextIndex((textIndex + 1) % text.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex, text, speed, eraseSpeed, eraseDelay])

  return (
    <span>
      {text[textIndex].substring(0, charIndex)}
      {cursor}
    </span>
  )
}



function Home() {
  useGSAP(()=>{
  let tl1= gsap.timeline();
  tl1.from(".line1",{
    y:80,
    duration:1,
    opacity:0
  })
  tl1.from(".line2",{
    y:80,
    duration:1,
    opacity:0
  })
  tl1.from(".line3",{
    y:80,
    duration:1,
    opacity:0
  })
  gsap.from(".righthome img",{
    x:200,
    duration:1,
    opacity:0
  })
})
  return (
    <div id="home">
      <div className='lefthome'>
        <div className="homedetails">
          <div className="line1">Ciao! Sono</div>
          <div className="line2">Erica Landolfo</div>
          <div className="line3">
            <TypingEffect
              text={["JUNIOR DEVELOPER","FRONT-END","BACK-END"]}
              speed={100}
              eraseSpeed={50}
              eraseDelay={1000}
              typingDelay={500}
              cursor="_"
            />
          </div>
          <button>HIRE ME!</button>
        </div>
      </div>
      <div className='righthome'>
        <img src={woman} alt="" />
      </div>
    </div>
  )
}

export default Home