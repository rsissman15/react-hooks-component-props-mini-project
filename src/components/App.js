import React from "react";
import About from "./About"
import blogData from "../data/blog";
import ArticleList from "./ArticleList"


console.log(blogData);

function App(props) {
  return (
    <div className="App">
      <header>
        <h1>{blogData.name}</h1>
      </header>
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts}></ArticleList>
    </div>
  );
}

export default App;
