import React from 'react'

import { faker } from '@faker-js/faker';

const Card = (props) => {
    return (
        <>
            <div className='card'>
                <div className='card-top'>
                    <div className='card-img' style={{ backgroundImage: `url(${faker.image.avatar()})` }}></div>
                    <div className='card-title'>
                        <h3>{props.name}</h3>
                        <p>{props.titleText}</p>
                    </div>
                </div>
                <div className='card-text'>{props.text}</div>
            </div>
        </>
    )
}

export default Card