import React from 'react';
import '../styles-sheets/Testimony.css';

function Testimony(props) {
    return (
            <div className='container-testimony'>
                <img alt='mark' src={require('../images/testimony-emma.png')} className='image-testimony'/>
                <div className='container-testimony-text'>
                    <p className='name-testimony'>{props.name} in {props.country}</p>
                    <p className='position-testimony'>{props.position} at {props.company}</p>
                    <p className='text-testimony'>"{props.testimony}"</p>
                </div>
            </div>
    );
}

export default Testimony;