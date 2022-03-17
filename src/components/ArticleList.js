
import Article from "./Article"
import react from "react"

function ArticleList({posts}){
    const postList=posts.map(post=>{
        return(<Article 
            key={post.id}  
            title={post.title} 
            date={post.date} 
            preview={post.preview}>
                
            </Article>)
    })
    return (
        <main>
            {postList}
        
        </main>
    )
}

export default ArticleList