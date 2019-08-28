import React from 'react';

const IdCard = ({ lastName, firstName,  gender, height, birth, picture}) => {
  
  return(
      <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48"><img src={picture} alt="Placeholder-pic" /></figure>
              </div>
                <div className="media-content">
                  <p className="subtitle is-6">First Name: {firstName}</p>
                  <p className="subtitle is-6">Last name: {lastName}</p>
                  <p className="subtitle is-6">Birth: {birth}</p>
                  <p className="subtitle is-6">Gender :{gender}</p>
            <p className="subtitle is-6">Height: {height}</p>
                
                </div>
              </div>
            </div>
        </div>
   
  )
}

export default IdCard;