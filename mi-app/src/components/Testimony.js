import React from 'react';

function Testimony() {
	return (
		<div className='container-testimony'>
			<img alt='mark' src={require('../images/testimony-emma.png')} className='image-testimony'/>
			<div className='container-testimony-text'>
				<p className='name-testimony'>Alessandra Ferri</p>
				<p className='position-testimony'>Systems engineer at Spotify</p>
				<p className='text-testimony'>"I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."</p>
			</div>
		</div>
	)
};

export default Testimony;