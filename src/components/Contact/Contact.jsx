import React from 'react'
import contact from "../../assets/contattami.png"
import "./Contact.css"
import {useGSAP} from "@gsap/react"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

function Contact() {
    useGSAP(() => {
    gsap.from(".leftcontact img", {
      x:-100,
      duration:10,
      opacity:0,
      scrollTrigger: {
        trigger:".leftcontact img",
        scroller:"body",
        scrub:2,
        start:"top 80%",
        end:"top 30%"
      }
    })    
    gsap.from("form", {
      x:100,
      duration:10,
      opacity:0,
      scrollTrigger: {
        trigger:"form",
        scroller:"body",
        scrub:2,
        start:"top 80%",
        end:"top 30%"
      }
    })
  })
  return (
    <div id="contact">
        <div className="leftcontact">
            <img src={contact} alt="" />
        </div>
        <div className="rightcontact">
            <form action="https://formspree.io/f/maeonjwz" method='POST'>
                <input name='Nome' type="text" placeholder='nome'/>
                <input name='Email' type="email" placeholder='Email'/>
                <textarea name="messaggio" id="textarea" placeholder='contattami'></textarea>
                <input type="submit" id='btn' value="Invia!"/>
            </form>
        </div>
    </div>
  )
}

export default Contact