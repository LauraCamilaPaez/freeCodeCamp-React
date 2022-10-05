import React from 'react';
import '../styles-sheets/Testimony.css';

function Testimony(props) {
    return (
            <div className='container-testimony'>
                <img alt='mark' src={require(`../images/testimony-${props.image}.png`)} className='image-testimony'/>
                <div className='container-testimony-text'>
                    <p className='name-testimony'><strong>{props.name}</strong> in {props.country}</p>
                    <p className='position-testimony'>{props.position} at <strong>{props.company}</strong></p>
                    <p className='text-testimony'>"{props.testimony}"</p>
                </div>
            </div>
    );
}

// Retos
// 

export default Testimony;