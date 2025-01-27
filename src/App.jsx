import Post from "./components/Post";
import { useState } from "react";

export default function() {


    const [posts, setPosts] = useState([
        {id: 1, userName: "JohnDoe", imageUrl: "https://picsum.photos/200?random=1", likeCount: 28, caption: "Testing my cam"},
        {id: 1, userName: "JDoe", imageUrl: "https://picsum.photos/200?random=2", likeCount: 22, caption: "Look at that"},
        {id: 1, userName: "JohnD", imageUrl: "https://picsum.photos/200?random=3", likeCount: 19, caption: "Yo"}
    ])

    const [formData, setFormData] = useState({
        userName: "",
        imageLink: "",
        caption: ""
    })

    const createPost = () => {
        const newUserName = formData.userName
        const newImageLink = formData.imageLink
        const newCaption = formData.caption

    if (newUserName && newImageLink && newCaption) {
        setPosts([...posts,{
            id: posts.length + 1,
            userName: newUserName,
            imageUrl: newImageLink,
            likeCount: 0,
            caption: newCaption
        }])

    setFormData ({
        userName: "",
        imageLink: "",
        caption: ""
    })
    }}


    return (
        <>
        <div className="container text-center mt-5">
            <h1 className="mb-3">My Feed</h1>

            <div className="container col-md-6 mb-5">
                <input className="form-control mb-2" type="text" placeholder="User Name" 
                value={formData.username} onChange={e => setFormData({...formData, userName: e.target.value})}/>
                <input className="form-control mb-2" type="text" placeholder="Image Link" 
                value={formData.imageLink} onChange={e => setFormData({...formData, imageLink: e.target.value})}/>
                <input className="form-control mb-3" type="text" placeholder="Caption" 
                value={formData.caption} onChange={e => setFormData({...formData, caption: e.target.value})}/>
                <button className="btn btn-primary" onClick={createPost}>Create Post</button>

            </div>

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