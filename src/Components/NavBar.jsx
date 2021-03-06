import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import coronavirusIcon from '../Images/home.png';
import globeIcon from '../Images/globe.png';
import chartBarIcon from '../Images/chart-bar.png';
import handIcon from '../Images/hand.png';
import resumeIcon from '../Images/resume.png';

const NavBar = () => {
  const [currNav, setCurrNav] = useState({
    summary: '',
    rank: '',
    chart: '',
    doa: '',
    about: ''
  });

  let history = useHistory();

  const { pathname } = history.location;

  useEffect(() => {
    handleActiveNav(pathname);
  }, [pathname])

  const handleNav = (destination) => {
    history.push(destination);
  }

  const handleActiveNav = (current) => {
    switch (current) {
      case '/':
        setCurrNav({
          summary: 'active'
        })
        break;

      case '/rank':
        setCurrNav({
          rank: 'active'
        })
        break;

      case '/chart':
        setCurrNav({
          chart: 'active'
        })
        break;

      case '/doa':
        setCurrNav({
          doa: 'active'
        })
        break;

      case '/about':
        setCurrNav({
          about: 'active'
        })
        break;

      default:
        break;
    }
  }

  const { summary, rank, chart, doa, about } = currNav;

  return (

    <nav className="navbar">
      <button className={summary} onClick={() => {handleNav('/')}}>
        <img src={coronavirusIcon} alt="globe icon"/>
        <p>Ringkasan</p>
      </button>

      <button className={rank} onClick={() => {handleNav('/rank')}}>
        <img src={globeIcon} alt="chart bar icon"/>
        <p>Peringkat</p>
      </button>

      <button className={chart} onClick={() => {handleNav('/chart')}}>
        <img src={chartBarIcon} alt="chart bar icon"/>
        <p>Grafik</p>
      </button>

      <button className={doa} onClick={() => {handleNav('/doa')}}>
        <img src={handIcon} alt="hand icon"/>
        <p>Doa</p>
      </button>
      
      <button className={about} onClick={() => {handleNav('/about')}}>
        <img src={resumeIcon} alt="resume icon"/>
        <p>Tentang</p>
      </button>
    </nav>
  )
}

export default NavBar;
