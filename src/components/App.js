import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About"
import ArticleList from "./ArticleList"


function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About image={blogData.image} about={blogData.about}/>
      <ArticleList title={blogData.title} date={blogData.date} preview={blogData.preview} posts={blogData.posts}/>
    </div>
  );
}

export default App;
