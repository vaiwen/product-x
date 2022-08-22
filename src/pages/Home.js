import React from 'react'

import { faker } from '@faker-js/faker';

const Home = () => {
  return (
    <div className='home'>
      <h1 className='main-text'>Lorem ipsum dolor <span>sit amet</span>, consectetur adipiscing.</h1>
      <div className='c1'></div>
      <h2 className='cards-title'>Here some <span>Famous</span> customers</h2>
      <div className='cards'>
        <div className='card'>
          <div className='card-top'>
            <div className='card-img' style={{ backgroundImage: `url(${faker.image.avatar()})` }}></div>
            <div className='card-title'>
              <h3>Brad Pitt</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor.</p>
            </div>
          </div>
          <div className='card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel interdum risus. Quisque nec tristique tortor. Duis interdum ex quis ipsum maximus dictum.</div>
        </div>
        <div className='card'>
          <div className='card-top'>
            <div className='card-img' style={{ backgroundImage: `url(${faker.image.avatar()})` }}></div>
            <div className='card-title'>
              <h3>Brad Pitt</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor.</p>
            </div>
          </div>
          <div className='card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel interdum risus. Quisque nec tristique tortor. Duis interdum ex quis ipsum maximus dictum.</div>
        </div>
        <div className='card'>
          <div className='card-top'>
            <div className='card-img' style={{ backgroundImage: `url(${faker.image.avatar()})` }}></div>
            <div className='card-title'>
              <h3>Brad Pitt</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor.</p>
            </div>
          </div>
          <div className='card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel interdum risus. Quisque nec tristique tortor. Duis interdum ex quis ipsum maximus dictum.</div>
        </div>
      </div>
      <div className='c2'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum pretium urna, vitae maximus magna lacinia vitae. Integer ac finibus.</p>
      </div>
    </div>
  )
}

export default Home