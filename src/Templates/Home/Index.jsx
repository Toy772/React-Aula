import './Style.css'
import { Component } from 'react';
import { PostCard } from '../../Components/PostCard/Index';
import { loadPosts } from '../../Components/LoadPosts/LoadPosts';
import { Button } from '../../Components/Button/Index';

 export class Home extends Component{

  state = {
   posts:[],
   allPosts:[],
   page:0,
   postPerPage:99,
  };


  timeOutUpdate = null;

  async componentDidMount(){
   /*  await this.abcd(); */
   const{page, postPerPage} = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({ 
      posts: postsAndPhotos.slice(page,postPerPage),
      allPosts:postsAndPhotos,     
    });
  }

 /*  abcd = async () => {
    const {page , postPerPage} = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({
      post:postsAndPhotos.slice(page,postPerPage),
      allPosts: postsAndPhotos,
    });  
  } */

  loadMorePosts = () =>{
    const {
      page,
      postPerPage,
      allPosts,
      posts
    } = this.state;
    const nextPage = page + postPerPage;
    const nextPosts =  allPosts.slice(nextPage,nextPage + postPerPage);
    posts.push(...nextPosts);

    this.setState({posts, page : nextPage});
  }


  render(){

    const {posts, page , postPerPage, allPosts } = this.state;
    const noMorePosts = page + postPerPage >= allPosts.length;
    return (
      <section className='Container'> 
        <div className='posts'>
          {posts.map(post =>(
            <PostCard key={post.id} post = {post} > </PostCard>
          )           
        )}
      </div>
      <div className='container-button'>
        <Button text='Load More Posts' onClick = {this.loadMorePosts} disabled = {noMorePosts}></Button>
      </div>
      
    </section>
     
    )
  }
}