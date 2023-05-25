import React from 'react';
import { useParams, Link} from 'react-router-dom';
import posts from '../../data/posts.json';




function BlogPost() {
    const {blogId} = useParams();
    const currentPost = posts.find((post) => {
        return post.id === blogId;
    });


    return (
        <>
            <article>
                <h1>BlogPost {currentPost.title}</h1>
                <h3>{currentPost.date}</h3>
                <p>{currentPost.content}</p>
             </article>
             <article>
                <Link to="/"> Terug naar Home</Link>
             </article>
        </>
    );
}
export default BlogPost