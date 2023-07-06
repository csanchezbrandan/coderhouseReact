import React from 'react'
import './StylesFooter.css'
import { AiFillLinkedin } from "react-icons/ai";
import { GiStoneStack } from "react-icons/gi"

function Footer() {
  return (
    <div className='Footer-container text-center' >

        <div className='text-center p-5 fs-5'>
        
          <span className='p-1'> <AiFillLinkedin></AiFillLinkedin></span>
          <a
          href={'https://www.linkedin.com/in/cristian-s%C3%A1nchez-brand%C3%A1n-1a874b189/'}
          target={'_blank'}
          rel='noreferrer'
          >
            LinkedIn
          </a>
          <p className='fs-6 pt-5'><GiStoneStack></GiStoneStack> @apachetaOutdoor ®</p>
        </div>
<h6>V.01.00</h6>
    </div>
  )
}

export default Footer