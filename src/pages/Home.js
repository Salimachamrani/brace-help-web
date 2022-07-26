import React from 'react';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import logo from '../img/logo.png';
function Home() {
  return (
    <div className='home'>
      <p style={{ fontFamily:" 'Brush Script MT', 'cursive'"}}>Bienvenue au tableau de bord du système intelligent Brace-Help</p>
      <img src={logo}  height="400px" />
    </div>
  );
}

export default Home;
