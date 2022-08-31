import './App.css';
import { Component } from 'react';

class App extends Component{

  state = {
   posts:[
    {
      id:1,
      title: 'O titulo 1',
      body: 'O corpo 1'
    },
    {
      id:2,
      title: 'O titulo 2',
      body: 'O corpo 2'
    },
    {
      id:3,
      title: 'O titulo 3',
      body: 'O corpo 3'
    },
  ]
  };

  render(){

    const {posts} = this.state;

    return (
      <div className='App'>
        {posts.map(posts =>
          (
            <div key={posts.id}>
              <h1> {posts.title} </h1>
              <p> {posts.body} </p>
            </div>
          )
           
        )}  

      </div>
    )
  }
}

export default App;
