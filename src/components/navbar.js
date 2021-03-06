import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Navbar(props) {
  const [view, setView] = useState('Home');

  if (window.location.pathname!=='/summary') {
    return (
      <div className="Navbar" style={{animationDelay: '0.5s'}}>

        <img className="fadeInUp" src="/icon.png" style={{animationDelay: '0.0s'}}/>

        <div className="navbar-left">
          <Link to="/" onClick={()=>{
            setView('Home');
          }}>
            <span className={`fadeInUp ${view==='Home' ? 'focused' : ''}`} style={{animationDelay: '0.2s'}}>Home</span>
          </Link>

          {/* <Link to="/updates" onClick={()=>{
            setView('Updates');
          }}>
            <span className={`fadeInUp ${view==='Updates' ? 'focused' : ''}`} style={{animationDelay: '0.2s'}}>Updates</span>
          </Link>*/}

          {/* <Link to="/networkmap" onClick={()=>{
            setView('Network Map');
          }}>
            <span className={`fadeInUp ${view==='Network Map' ? 'focused' : ''}`} style={{animationDelay: '0.3s'}}>Network Map</span>
          </Link>*/}

          <Link to="/links" onClick={()=>{
            setView('Helpful Links');
          }}>
            <span className={`fadeInUp ${view==='Helpful Links' ? 'focused' : ''}`} style={{animationDelay: '0.4s'}}>Helpful Links</span>
          </Link>

          <Link to="/helpline" onClick={()=>{
            setView('HelpLine');
          }}>
            <span className={`fadeInUp ${view==='HelpLine' ? 'focused' : ''}`} style={{animationDelay: '0.4s'}}>Helpline</span>
          </Link>
          
          <Link to="/contribute" onClick={()=>{
            setView('Contribute');
          }}>
            <span className={`fadeInUp ${view==='Contribute' ? 'focused' : ''}`} style={{animationDelay: '0.6s'}}>Contribute</span>
          </Link>
        </div>

        <div className="navbar-right"></div>

      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
}

export default Navbar;
