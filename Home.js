/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
import axios from 'axios';
import './Styles/Home.css';
import logo from '../Assets/logo_small.png';

// const bgImg = 'https://cdn.discordapp.com/attachments/751992526071791637/760504697228099624/fps_gaming-wallpaper-1920x1080.jpg';

const Home = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log(email);
    axios.post('')
    .then((data) => {
      console.log(data);
    });
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <main className="homepage_main">
        <div className="homepage_main_bottom" />
      </main>

      <header className="homepage_main_header">
        <img alt="" src={logo} />
        <h1>CRUST PLAY</h1>

        <p>
          All-in-one platform for all
          <span> Esports Fans </span>
          <br />
          coming soon
        </p>

        <div className="newsletter_form">
          <input className="newsletter_form_email" placeholder="Email" type="email" value={email} onChange={handleChange} />
          <input className="newsletter_form_submit" type="submit" onClick={handleSubmit} value="Stay Updated" />
        </div>
      </header>
    </div>
 );
};

export default Home;
