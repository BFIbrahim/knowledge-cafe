import { useEffect, useState } from "react";
import SingleBlog from "../SingleBlog/SingleBlog";

const Blog = () => {

    const [blogs, setBlogs] = useState([]);
    useEffect( () => {
        fetch('/public/bolgs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3">
            {
                blogs.map(blog => <SingleBlog
                    key={blog.id}
                    blog={blog}
                ></SingleBlog>)
            }
        </div>
    );
};

export default Blog;