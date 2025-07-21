import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div
            className='hero min-h-[calc(100vh-135px)]'
            style={{
                backgroundImage:
                    'url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)',
            }}
        >
            <div className='hero-overlay'></div>
            <div className='hero-content text-neutral-content text-center'>
                <div className='max-w-lg'>
                    <h1 className='text-5xl font-bold'>
                        Welcome to
                        <span className='bg-gradient-to-r from-primary via-blue-500 to-secondary bg-300% text-transparent bg-clip-text animate-gradient'>
                            {' '}
                            TechFlow
                        </span>
                    </h1>
                    <p className='py-6'>
                        TechFlow is the bridge between the complex world of technology and
                        the curious minds eager to understand it
                    </p>
                    <div className='flex gap-2 justify-center'>

                        <Link to='/blogs'
                            className='px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block'
                        >
                            <span className='absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500'></span>
                            <span className='h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500'></span>
                            <span className='absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500'></span>
                            <span className='absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500'></span>
                            <span className='relative'>Read Blogs</span>
                        </Link>
                        <Link to='/bookmarks'
                            className='px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block'
                        >
                            <span className='absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500'></span>
                            <span className='h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500'></span>
                            <span className='absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500'></span>
                            <span className='absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500'></span>
                            <span className='relative'>Bookmarks</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;