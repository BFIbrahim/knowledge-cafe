import { useEffect, useState } from "react";

const Blog = () => {

    const [blogs, setBlogs] = useState([]);
    useEffect( () => {
        fetch('/public/bolgs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3">
            Hello
        </div>
    );
};

export default Blog;