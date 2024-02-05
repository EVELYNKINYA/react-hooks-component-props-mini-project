// App.js
import React from "react";
import Header from "./Header"; 
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blog"; 

function App() {
  const { blogName, aboutText, posts } = blogData;

  return (
    <div>
      <Header name={blogName} />
      <About about={aboutText} />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;

