import React from 'react';
import { MdOutlineBookmarks } from "react-icons/md";


const SingleBlog = ({ blog }) => {
    console.log(blog)

    const { title, cover_image, author, author_img, posted_date, reading_time, hashtags } = blog

    return (
        <div className='mt-10'>
            <img className='w-full rounded-md' src={cover_image} alt="" />
            <div className='mt-5 md:flex justify-between items-center'>
                <div className='flex gap-5'>
                    <img className='max-w-14' src={author_img} alt="" />
                    <p>
                        <h2 className='text-2xl font-semibold'>{author}</h2>
                        <h4>Posted in: {posted_date}</h4>
                    </p>
                </div>
                <div className='flex gap-4'>
                    <h4 className='text-[20px]'>{reading_time} reaing time</h4>
                    <MdOutlineBookmarks className='text-2xl cursor-pointer'/>
                </div>
            </div>
            <h1 className='mt-3 text-4xl font-bold'>{title}</h1>
            <p className='mt-2 font-semibold text-gray-500'>{hashtags}</p>
        </div>
    );
};

export default SingleBlog;