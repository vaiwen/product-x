import React from 'react'
import Card from '../components/Card';

const Home = () => {
  return (
    <div className='home'>
      <h1 className='main-text'>Lorem ipsum dolor <span>sit amet</span>, consectetur adipiscing.</h1>
      <div className='home-c1'></div>
      <h2 className='cards-title'>Here some <span>Famous</span> customers</h2>
      <div className='cards'>
        <Card
          name='Brad Pitt'
          titleText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor.'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel interdum risus. Quisque nec tristique tortor. Duis interdum ex quis ipsum maximus dictum.' />
        <Card
          name='Brad Pitt'
          titleText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor.'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel interdum risus. Quisque nec tristique tortor. Duis interdum ex quis ipsum maximus dictum.' />
        <Card
          name='Brad Pitt'
          titleText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor.'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel interdum risus. Quisque nec tristique tortor. Duis interdum ex quis ipsum maximus dictum.' />
      </div>
      <div className='home-c2'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum pretium urna, vitae maximus magna lacinia vitae. Integer ac finibus.</p>
      </div>
      <hr/>
      <div className='home-c3'>
        <div className='content-image'></div>
        <div className='content-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget tincidunt nisl.</div>
      </div>
      <div className='home-c3'>
        <div className='content-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget tincidunt nisl.</div>
        <div className='content-image'></div>
      </div>
      <div className='home-c4'>
        <div className='c4-content-image'></div>
        <div className='boxes'>
          <div className='box'></div>
          <div className='box'></div>
          <div className='box'></div>
          <div className='box'></div>
          <div className='box'></div>
          <div className='box'></div>
          <div className='box'></div>
          <div className='box'></div>
          <div className='box'></div>
        </div>
      </div>
    </div>
  )
}

export default Home