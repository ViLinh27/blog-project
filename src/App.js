//import logo from './logo.svg';
import React from 'react';
import './App.css';
import PostList from "./posts/PostList"
import UserBar from "./user/UserBar"
import CreatePost from "./posts/CreatePost"
import {useState} from 'react';

function App() {
  const initialPosts = [
    {
      title:"first post",
      content: "content 1",
      //author: "paul"
    }
  ]
  const [user,setUser] = useState('')
  const [posts, setPosts] = useState(initialPosts)

  return (
    <div>
      <UserBar user={user && <CreatePost user={user}/> } posts={posts} setPosts = {setPosts}/>
      <PostList posts = {posts}/>
    </div>
    
  );
}

export default App;
