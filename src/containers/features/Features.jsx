import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featureData = [
  {
    title: 'Communicating your idea',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
    text: 'Have a session with the team of experts in our institution. Voice out your opinion and watch it turn to something incredible.',
  },
  {
    title: 'Brainstorming and creative thinking',
    text: 'Creative minds doing collaborative works to bring your enterprise to live, carving out various options to work with.',
  },
  {
    title: 'Presenting various options',
    text: 'Enlisting numbers of available creative idea and collectively selecting which best suits the present need of your enterprise.',
  },
  {
    title: 'Executing and bringing all to live',
    text: 'Creating magic, Turning ideas to solid project that depicts and takes you to the highest possible level. ',
  },
]

const Features = () => {
  return (
    <>
      <section className='gpt3__features section__padding' id='features'>
        <div className="gpt3__features-heading">
          <h1 className="gradient__text">
            Secure the future of your enterprise with Gorillaz. Step into the world today and make a difference.
          </h1>
          <p>
            Request one or multiple of our service
          </p>
        </div>
        <div className="gpt3__features-container">
          {
            featureData.map(( item, i) => (
              <Feature key={i + item.title } title={item.title} text={item.text} />
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Features