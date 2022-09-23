import './Style.css'
import { Component } from 'react';
import { PostCard } from '../../Components/PostCard/Index';
import { loadPosts } from '../../Components/LoadPosts/LoadPosts';
import { Button } from '../../Components/Button/Index';
import { TextInput } from '../../Components/TextInput/Index';

 export class Home extends Component{

  state = {
   posts:[],
   allPosts:[],
   page:0,
   postPerPage:6,
   Search_value: '',
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

  handleChange = (e) =>{
    const {value} = e.target;
    this.setState({Search_value:value})
  }


  render(){

    const {posts, page , postPerPage, allPosts,Search_value } = this.state;
    const noMorePosts = page + postPerPage >= allPosts.length;

    const filteredPosts = !!Search_value ? 
    allPosts.filter(post => {
      return post.title.toLowerCase().includes(Search_value.toLowerCase());
    }) : posts;
    return (
      <section className='Container'>
        <div className='search-Container'>
          {!!Search_value &&(
            <h1> Search Value: {Search_value}</h1>
          )}
       
          <TextInput 
            Search_value = {Search_value}
            handleChange = {this.handleChange}>
          </TextInput>
        </div>
     

        {filteredPosts.length > 0 && (
          <div className='posts'>
            {filteredPosts.map(post =>(
              <PostCard key={post.id} post = {post} > </PostCard>
            ))}
          </div>
        )}

        {filteredPosts.length === 0 && (
          <p>Não existem Posts</p>
        )}
          
       
      
      <div className='container-button'>
        {!Search_value &&(
            <Button 
              text='Load More Posts' 
              onClick = {this.loadMorePosts} 
              disabled = {noMorePosts}>               
            </Button>
        )}
       
      </div>
      
    </section>
     
    )
  }
}