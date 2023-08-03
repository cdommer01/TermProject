import React from 'react'

const About = () => {
    return (
      <div className='container'>
        <h1>
          Documentation
        </h1>
        <h5>This is a website comprised of random pages. It includes:</h5>
        <ul>
          <li>Random Images</li>
          <li>Random Text</li>
          <li>Random Colors</li>
          <li>List of APIs</li>
        </ul>
        <h4>Text Page</h4>
        <h6>This page goes through the random text API from assignment 6 and randomly picks out 5 of them to display.</h6>
        <h4>Image Page</h4>
        <h6>This page searches for images relating to whatever the user types in. The images are taken from unsplash. 
          Right-clicking the image to open it in a new tab will take you to its source.</h6>
        <h4>Color Page</h4>
        <h6>This page has a button that can change the color on the page to a different random one.</h6>
        <h4>API Page</h4>
        <h6>This page shows the APIs used in this project. You can add to it (it doesn't have to be an api link).</h6>
      </div>
    )
}

export default About
