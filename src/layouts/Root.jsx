import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div>
            <div className='h-16'>
                <Navbar />
            </div>
            {/* {Packet} */}
            <div className='min-h-[calc(100vh-135px)]'>
                <Outlet />
            </div>

            {/* footer */}
            <Footer/>
        </div>
    );
};

export default Root;
