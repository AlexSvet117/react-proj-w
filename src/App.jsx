import Post from "./components/Post";
import { useState } from "react";

export default function() {


    const [posts, setPosts] = useState([
        {id: 1, userName: "JohnDoe", imageUrl: "https://picsum.photos/200?random=1", likeCount: 28, caption: "Testing my cam"},
        {id: 1, userName: "JDoe", imageUrl: "https://picsum.photos/200?random=2", likeCount: 22, caption: "Look at that"},
        {id: 1, userName: "JohnD", imageUrl: "https://picsum.photos/200?random=3", likeCount: 19, caption: "Yo"}
    ])


    return (
        <>
        <div className="container text-center mt-5">
            <h1 className="mb-3">My Feed</h1>

            <div className="container">
                {posts && (
                    posts.map(post => {
                        return (
                            <Post post ={post}/>
                        )
                    })
                )}
            </div>
        </div>
        </>
    )
}