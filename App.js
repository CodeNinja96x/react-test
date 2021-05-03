import React from 'react';
import './App.css';
import profile from './profileP.jpg';
import * as faBrand from  "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  return (
    <div className="App">
     <div className="container">
       <div className="social">
        <i><FontAwesomeIcon icon={faBrand.faFacebook}/></i>
       </div>
       <div className="social">
         <i><FontAwesomeIcon icon={faBrand.faInstagram}/></i>
       </div>
       <div className="social">
       <i><FontAwesomeIcon icon={faBrand.faTwitter}/></i>
       </div>
       <div className="social">
       <i><FontAwesomeIcon icon={faBrand.faGithub}/></i>
       </div>
       <div className="social">
       <i><FontAwesomeIcon icon={faBrand.faWhatsapp}/></i>
       </div>
       <img src={profile} alt="profile"></img>
     </div>
    </div>
  );
}

export default App;
