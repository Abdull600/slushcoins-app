import {
    FaFacebookSquare,
    FaGitSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa'


const Footer = () => {
    return (
        <div className="max-w-[1240px] mx-auto py-15 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
            <div className="">
                <h1 className='w-full text-3xl font-bold text-[#574b90]'>SLUSH<span className='text-white'>Coins</span></h1>
                <p className='py-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit repellendus quis molestiae! Veniam in et ratione laborum! Inventore, porro! Quam quos impedit ducimus aut dolorem. Expedita quam qui esse voluptatibus.</p>
                <div className="flex justify-between md:w-[75%] my-6">
                    <FaFacebookSquare size={30} />
                    <FaTwitterSquare size={30} />
                    <FaInstagram size={30} />
                    <FaGitSquare size={30} /> 
                </div>
            </div>
            <div className="lg:col-span-2 flex justify-between">
                <div className="">
                    <h6 className='font-medium text-gray-400'>Support</h6>
                    <ul className="">
                        <li>Guides</li>
                        <li>Tips and Tricks</li>
                        <li>Status</li>
                        <li>Account Setup</li>
                    </ul>
                </div>
                <div className="">
                    <h6 className='font-medium text-gray-400'>Company</h6>
                    <ul className="">
                        <li>About</li>
                        <li>Blogs</li>
                        <li>Careers</li>
                        <li>Press</li>
                    </ul>
                </div>
                <div className="">
                    <h6 className='font-medium text-gray-400'>Solutions</h6>
                    <ul className="">
                        <li>Commerce</li>
                        <li>Insights</li>
                        <li>Marketing</li>
                        <li>Analytics</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;