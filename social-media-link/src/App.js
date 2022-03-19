import React, { useState } from 'react';
import ParticlesBg from "particles-bg";
import './App.css';
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsSpotify } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import TextLoop from "react-text-loop";
import Typist from 'react-typist';

function App() {
  const config_cursor = {
  show: true,
  blink: true,
  element: '|',
  hideWhenDone: true,
  }

  const [darkmode, setdarkmode] = useState(false);

  return (
    <div >
      <div className={`card ${darkmode ? 'dark' : ''}`}>
        <div className="toggle-btn" onClick={() => setdarkmode(!darkmode)}></div>
        <div className="dark-mode"></div>
        <div className="card_body">
          <div className="profile text-center">
            <img src="/nan-pp.png" className="avatar"/>
            <div className="bg_content rd-12 p-8">
              <h1>@Ananda_widiastana</h1>
              <p>Hello Crazy World!</p>
              <Typist cursor={config_cursor}>
                May The Force Be with You
              </Typist>
            </div>
            <div className="bg_content rd-12 p-8 mt-16">
              I'm learning {" "}
              <TextLoop interval={800}>
                <span className='hightlight'>HTML</span>
                <span className='hightlight'>CSS</span>
                <span className='hightlight'>Javascript</span>
                <span className='hightlight'>Bootstrap</span>
                <span className='hightlight'>React JS</span>
                <span className='hightlight'>PHP</span>
              </TextLoop>
            </div>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" href="https://www.instagram.com/ananda_widiastana/">
              <BsInstagram/>
              <span>Instagram</span>
            </a>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" href="https://open.spotify.com/user/hd4gth848itbzw5dfmeolfg45?si=ee2b5da4478c4c33">
              <BsSpotify/>
              <span>Spotify</span>
            </a>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" href="https://github.com/Anandawd">
              <BsGithub/>
              <span>Github</span>
            </a>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" href="https://secreto.site/id/a8k553">
              <MdEmail/>
              <span>Secreto</span>
            </a>
          </div>
        </div>
      </div>
       <ParticlesBg type="thick" bg={true} />
    </div>
  );
}

export default App;
