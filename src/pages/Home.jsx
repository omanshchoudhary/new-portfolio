import '../styles/Home.css'

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
          width={100}
          height={100}
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

      <div className='home-about-me'>
        <span className="text-xl font-bold text-white mb-3 block border-b border-gray-600 pb-2">About Me</span>
        <span className="text-gray-300 text-sm leading-relaxed block">Hi, I'm Omansh.
          I'm a 19-year-old undergraduate Computer Science student at VIT Vellore. I like to build the things I dream of and see them through to completion. Currently, I'm exploring web development and sharpening my problem-solving skills, constantly experimenting and learning along the way.
        </span>
      </div>
      <div className='home-links'></div>
    </div>
  )
}

export default Home 