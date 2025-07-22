import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import wave from '../assets/wave.svg'

const Home = () => {
    return (
        <div className='flex relative flex-col items-center justify-center'>
            <Hero/>


            <img className='absolute bottom-0 w-full' src={wave}></img>
        </div>
    );
};

export default Home;