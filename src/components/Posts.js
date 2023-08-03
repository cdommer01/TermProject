import React from 'react';
import Post from './Post';

const Posts = (props) => {
  const { posts, isLoading } = props;
  
  if (!posts || posts.length === 0) {
    //how do i get it to be centered argh
    return "No post able to show.";
  }
  
  return (
    <div className="container">
        <h2 className='list-head'>Text</h2>
        {!isLoading && posts.map((post) => {
            return (
              <Post key={post.id} post={post}/>
            );
        })
        }
    </div>
  );
};
export default Posts;
