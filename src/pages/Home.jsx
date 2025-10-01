import '../styles/Home.css'
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

import profile1x from '../assets/profile.png'
import profile2x from '../assets/profile@2x.png';
import profile3x from '../assets/profile@3x.png';

function Home() {
  return (
    <div className='home'>

      <div className='home-header'>
        <img
          src={profile1x}
          srcSet={`${profile1x} 1x, ${profile2x} 2x, ${profile3x} 3x`}
          alt="Profile Pic"
          className="profile-img"
          width={80}
          height={80}
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          style={{
            imageRendering: 'auto',
            WebkitImageRendering: 'crisp-edges',
            MozImageRendering: 'crisp-edges',
            msImageRendering: 'auto'
          }}
        />

        <div className='name-username'>
          <p className='name'>Omansh Choudhary</p>
          <p className='username'>@PhantomC0der</p>
        </div>
      </div>

      <div className='about-me'>
        <span className="text-gray-300 text-sm leading-relaxed block">Hi, I'm Omansh.
          I'm a 19-year-old undergraduate Computer Science student at VIT Vellore. I like to build the things I dream of and see them through to completion. Currently, I'm exploring web development and sharpening my problem-solving skills, constantly experimenting and learning along the way.
        </span>
      </div>

      <div className="socials">
        <a href="https://github.com/omanshchoudhary" target="_blank" aria-label="GitHub Profile" className="icons">
          <FaGithub />
        </a>

        <a href="https://x.com/PhantomC0der" target="_blank" aria-label="Twitter/X Profile" className="icons">
          <FaXTwitter />
        </a>

        <a href="https://linkedin.com/in/omansh-choudhary" target="_blank" aria-label="LinkedIn Profile" className="icons">
          <FaLinkedin />
        </a>

        <a href="https://leetcode.com/omanshchoudhary" target="_blank" aria-label="Leetcode Profile" className="icons">
          <SiLeetcode />
        </a>

        <a href="mailto:omansh.choudhary@example.com" aria-label="Email Contact" className="icons">
          <FaEnvelope />
        </a>
      </div>


    </div>
  )
}

export default Home 