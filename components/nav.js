import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Nav = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className="flex text-white justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
            <h2 className="w-full text-3xl font-bold text-[#574b90]">SLUSH<span className='text-white'>Coins</span></h2>
            <ul className="hidden md:flex">
                <li className="p-4">Home</li>
                <li className="p-4">Company</li>
                <li className="p-4">Resources</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {nav? <AiOutlineClose size={20} /> :  <AiOutlineMenu size={20} />}
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-grey-100 bg-[#000300] ease-in-out duration-500 ' : 'fixed left-[-100%]'}>
                <h2 className="w-full text-3xl font-bold text-[#574b90] m-4">SLUSH<span className='text-white'>Coins</span></h2>
                <ul className="uppercase p-4">
                    <li className="p-4 border-b border-grey-600">Home</li>
                    <li className="p-4 border-b border-grey-600">Company</li>
                    <li className="p-4 border-b border-grey-600">Resources</li>
                    <li className="p-4 border-b border-grey-600">About</li>
                    <li className="p-4">Contact</li>
                </ul> 
            </div>
        </div>
    )
}

export default Nav;