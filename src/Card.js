import React from 'react';

const Card = (props) => {
    return (
        // note that each component can only return one thing
        // one way to get around this is wrapping everything in a div tag
        // className can be used to modify the styling properties (using npm package tachyons)
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${props.id}?200x200`} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Card;