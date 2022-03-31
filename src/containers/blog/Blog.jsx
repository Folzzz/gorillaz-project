import React from 'react';
import { Article } from '../../components';

import { blog01, blog02, blog03, blog04, blog05 } from './import';

import './blog.css';

const Blog = () => {
  return (
    <>
      <section className="blog section__padding" id='blog'>
        <div className="blog-heading">
          <h1 className="gradient__text">
            A lot is happening. <br/>
            We are blogging about it.
          </h1>
        </div>
        <div className="blog-container">
          <div className="blog-container_groupA">
            <Article imageUrl={blog01} date='Sep 10, 2022' title='Gorillaz is the future. Let us exlore how it is?' />
          </div>
          <div className="blog-container_groupB">
            <Article imageUrl={blog02} date='Sep 10, 2022' title='Gorillaz is the future. Let us exlore how it is?' />
            <Article imageUrl={blog03} date='Sep 10, 2022' title='Gorillaz is the future. Let us exlore how it is?' />
            <Article imageUrl={blog04} date='Sep 10, 2022' title='Gorillaz is the future. Let us exlore how it is?' />
            <Article imageUrl={blog05} date='Sep 10, 2022' title='Gorillaz is the future. Let us exlore how it is?' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog