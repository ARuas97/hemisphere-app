import React from "react";
import './hemisphere.css'
import northPic from './image/north.png';
import southPic from './image/south.png';

const hemisphereConfig = {
    Northern: {
        text: 'You are in the northern hemisphere',
        picture: northPic

    },

    Southern: {
        text: 'You are in the southern hemisphere',
        picture: southPic

    }
}

const HemisphereDisplay = ({ latitude }) => {
    
  const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
  const {text, picture} = hemisphereConfig[hemisphere]

  return(
      <div>
          <div className={hemisphere}> 
              <div className="content-wrapper">
                  <div className="ui raised text container segment">
                      <div className="image">
                          <img src={picture} alt="hemisphere icon" width='200px' height='200px'/>
                      </div>
                  </div>
                  <div className="ui teal label custom-label">        
                      <h1>{ text }</h1>
                  </div>
              </div>
          </div>
          <h1>Hello</h1>
      </div>
  )
}

export default HemisphereDisplay;