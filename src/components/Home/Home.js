import React, { useEffect, useState } from 'react'
import { Container } from 'semantic-ui-react';
import Post from '../Post/Post'
import PostForm from '../Post/PostForm';
import "./Home.css"



export default function Home() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [postList, setPostList] = useState([]);


    useEffect(() => {
        fetch("/posts").then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setPostList(result);
                },

                (eror) => {
                    setIsLoaded(true);
                    setError(error);

                },
            )

    }, [])

    if (error) {
        return <div>Error !!</div>;

    }
    else if (!isLoaded) {
        return <div>Data yükleniyor</div>;
    }
    else {
        return (
            <div>
                {postList.map((post,i) => (
          
                    <Container className='postMain' key={i}>
                         <PostForm userId={post.userId} text={post.text} deneme={post.title}
                        userName={post.userName}
                        key={post.uniqueId}> </PostForm>
                        <Post  userId={post.userId} text={post.text} deneme={post.title}
                        userName={post.userName}
                        key={post.uniqueId} ></Post>
                        
                     
                     </Container>
                ) )}
            </div>
        );
    }

}
