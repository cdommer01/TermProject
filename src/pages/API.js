import React, { Fragment } from 'react';
import Form from '../components/Form';

const APIs = () => {
  return (
    <Fragment>
      <div className='container'>
        <h1>
          <i className='fas fa-exclamation-triangle'></i> List of APIs
        </h1>
        <Form></Form>
        <ul>'https://jsonplaceholder.typicode.com/posts'</ul>
        <ul>'https://api.unsplash.com/search/'</ul>
      </div>
    </Fragment>
  );
};

export default APIs;