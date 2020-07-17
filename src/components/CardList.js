import React from 'react';
import Card from '../components/Card.js';

const CardList = ({robots}) => {

    const cardComponents = robots.map((user, index) => {
        return <Card key={index} id={robots[index].id} name={robots[index].name} email={robots[index].email}/>
    })

    return (
        <div>   
            {cardComponents}
        </div>
    )
}

export default CardList;