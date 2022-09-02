import './App.css';
import { Component } from 'react';

class App extends Component{

  state = {
   posts:[
     
    ]
  };


  timeOutUpdate = null;

  componentDidMount(){
    this.LoadPosts(); /* .then(response => response.json())
    .then(posts=> this.setState({posts})) */
  }

 

  LoadPosts = async () =>{
    const postsResponse =  fetch('https://jsonplaceholder.typicode.com/posts');

    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');
    
    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postsJson.map((post, index) => {
      return {...post , cover: photosJson[index].url }
    });

    this.setState({ posts: postsAndPhotos});
  }

  render(){

    const {posts} = this.state;

    return (
      <section className='Container'> 
        <div className='posts'>
          {posts.map(post =>(
            <div className='post'>
              <img src= {post.cover} alt={post.title}  />
              <div className='post-content' key={post.id}>
                <h1> {posts.title} </h1>
                <p> {posts.body} </p>
              </div>
            </div>
          )           
        )}
      </div>
    </section>
     
    )
  }
}

export default App;
