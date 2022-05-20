import ReactTyped from "react-typed";

const Hero = () => {
    return (
        <div className="text-white">
            <div className="max-w-[850px] mt-[-115px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#574b90] font-bold p-2">BUY AND SELL CRYPTO ASSETS</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Buy and sell coins</h1>
                <div className="flex justify-center items-center w-full">
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold">With SLUSHCoins you can safely</p>
                    <ReactTyped
                        className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
                        strings={[
                            'Buy',
                            'Sell']}
                            typeSpeed={120}
                            backSpeed={140}
                            loop 
                    />
                </div>
                <p className="md:text-2xl text-xl font-bold text-gray-500">We help you connect with people who trade their crypto products.</p>
                <button className="bg-[#574b90] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">Get Started</button>
            </div>
        </div>
    )
}

export default Hero;