import React, { Fragment, useEffect, useState } from 'react';
import Posts from '../components/Posts';
import axios from 'axios';
import Spinner from '../components/Spinner';



function Home() {
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  });
  
  useEffect( () => {
    setAppState({ loading : true});
    setTimeout(()=>{
      const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
      axios.get(apiUrl).then((repos)=>{
        const allRepos = repos.data;
        let randomInt = Math.random()*100
        let smallest = 0;
        if(randomInt < 5){
          smallest = 100 - randomInt;
        }else{
          smallest = randomInt-5;
        }
        setAppState({ loading : false, posts: allRepos.slice(smallest,randomInt)});
      });
    },"1500");
  }, [setAppState]);

  return (
      appState.loading ? <Spinner/> : <Posts isLoading={appState.loading} posts={appState.posts}/>
  );

}
export default Home;
