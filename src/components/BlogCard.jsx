import React from 'react';
import { Link } from 'react-router-dom';
import PlaceholderImaage from '../assets/404.jpg'

const BlogCard = ({ blog }) => {
    const { cover_image, image, title, description, published_at, id } = blog;
    return (
        <div className='transition hover:scale-105'>
            <Link
                to={`/blog/${id}`}
                rel='noopener noreferrer'
                href='#'
                className='max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50'
            >
                <img
                    role='presentation'
                    className='object-cover w-full rounded h-44 dark:bg-gray-500'
                    src={cover_image || PlaceholderImaage}
                />
                <div className='p-6 space-y-2'>
                    <h3 className='text-2xl font-semibold group-hover:underline group-focus:underline'>
                        {title}
                    </h3>
                    <span className='text-xs dark:text-gray-600'>
                        {new Date(published_at).toLocaleDateString()}
                    </span>
                    <p>{description}</p>
                </div>
            </Link>
        </div>
    );
};

export default BlogCard;