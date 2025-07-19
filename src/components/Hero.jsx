

const Hero = () => {
    return (
        <div
            className='hero min-h-screen'
            style={{
                backgroundImage:
                    'url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)',
            }}
        >
            <div className='hero-overlay'></div>
            <div className='hero-content text-neutral-content text-center'>
                <div className='max-w-md'>
                    <h1 className='text-5xl font-bold'>
                        Welcome to
                        <span className='bg-gradient-to-r from-primary via-blue-500 to-secondary bg-300% text-transparent bg-clip-text animate-gradient'>
                            {' '}
                            TechFlow
                        </span>
                    </h1>
                    <p className='py-6'>
                        TechFlow is the bridge between the complex world of technology
                        and the curious minds eager to understand it
                    </p>
                    <button className='btn btn-primary'>Read Blogs</button>
                    <button className='btn btn-primary'>Bookmarks</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;