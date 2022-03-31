import React from 'react';
import { Feature } from '../../components';
import Features from '../features/Features';
import './whatGorillaz.css';

const WhatGorillaz = () => {
  return (
    <>
     <section className="whatgorillaz section__margin" id='whatgorillaz'>
       <div className="whatgorillaz-feature">
         <Feature 
          title="What is Gorillaz" 
          text="We are a digital agency into branding, content creation and advertising. We turn rookies to pro and under-g's to top players by bringing products, services, opinions, causes to public notice, bring the world to your feet and let us help your enterprise gain greater awareness" 
        />
       </div>
       <div className="whatgorillaz-heading">
         <h1 className='gradient__text'>
           The Outcome is more than you can imagine
         </h1>
         <p>Explore Our Archive</p>
       </div>
       <div className="whatgorillaz-container">

         <Feature
          title='Branding'
          text="Creating a strong, positive perception of a company, its products and services in the customer's mind"
        />
         <Feature
          title='Content Creation'
          text='Identify a project to focus on, decide on which form you want the content to take, formalizing your strategy (keyword or otherwise), and then actually producing it.'
        />
         <Feature
          title='Advertisement'
          text='We involve in promotional activity to increase to sale of products and services to a target audience driving profit and revenue forward.'
        />

       </div>
     </section>
    </>
  )
}

export default WhatGorillaz