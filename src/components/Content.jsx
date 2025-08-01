import { Link, useLoaderData } from 'react-router-dom';
import PlaceholderImaage from '../assets/404.jpg'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw';


const Content = () => {
    const blog = useLoaderData();
    const { cover_image, image, title, description, published_at, id, tags, body_html } = blog;
    return (
        <div className=''>
            <Link
                to={`/blog/${id}`}
                rel='noopener noreferrer'
                href='#'
                className='mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50'
            >
                <img
                    role='presentation'
                    className='object-cover w-full rounded h-44 dark:bg-gray-500'
                    src={cover_image || PlaceholderImaage}
                />
                <div className='p-6 space-y-2'>
                    <h3 className='font-semibold group-hover:underline group-focus:underline'>
                        {tags.map((tag) => (
                            <a
                                rel='noopener noreferrer'
                                href='#'
                                className='px-3 py-1 rounded-sm hover:underline dark:text-gray-700'
                            >
                                #{tag}
                            </a>
                        ))}
                    </h3>
                    <span className='text-xs dark:text-gray-600'>
                        {new Date(published_at).toLocaleDateString()}
                    </span>
                    <h3 className='text-2xl font-semibold group-hover:underline group-focus:underline'>
                        {title}
                    </h3>
                    <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
                </div>
            </Link>
        </div>
    );
};

export default Content;