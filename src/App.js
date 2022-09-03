import './App.css';
import { Component } from 'react';
import { PostCard } from './Components/PostCard/Index';
import { loadPosts } from './Components/any/LoadPosts';

class App extends Component{

  state = {
   posts:[
     
    ]
  };


  timeOutUpdate = null;

  async componentDidMount(){
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos});
  }

  render(){

    const {posts} = this.state;

    return (
      <section className='Container'> 
        <div className='posts'>
          {posts.map(post =>(
            <PostCard key={post.id} post = {post} > </PostCard>
          )           
        )}
      </div>
    </section>
     
    )
  }
}

export default App;
