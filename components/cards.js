import Image from "next/image";
import User from '../public/user.png'

const Cards = () => {

    return (
        <div className="w-full py-[10rem] px-4 bg-white" >
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <Image width={250} height={77} quality={100}  objectFit="contain" className="w-20 mx-auto mt-[-3rem] bg-white" src={User} alt="/" />
                    <h2 className="text-2xl font-bold text-center py-8">Free Account</h2>
                    <p className="text-4xl text-center font-bold">$50</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">$100 Maximum Withdrawal</p>
                        <p className="py-2 border-b mx-8 mt-8">1 Transfer Per Day</p>
                        <p className="py-2 border-b mx-8 mt-8">Limited Features</p>
                    </div>
                    <button className="bg-[#574b90] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Start Trial</button>
                </div>
                <div className="w-full shadow-xl bg-gray-100  flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
                    <Image width={250} height={77} quality={100}  objectFit="contain" className="w-20 mx-auto mt-[-3rem] bg-white bg-transparent" src={User} alt="/" />
                    <h2 className="text-2xl font-bold text-center py-8">Premium Account</h2>
                    <p className="text-4xl text-center font-bold">$150</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">$250 Maximum Withdrawal</p>
                        <p className="py-2 border-b mx-8 mt-8">5 Transfer Per Day</p>
                        <p className="py-2 border-b mx-8 mt-8">Unlimited Features</p>
                    </div> 
                    <button className="bg-black text-[#574b90] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Start Trial</button>
                </div>
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <Image width={250} height={77}  objectFit="contain" className="w-20 mx-auto mt-[-3rem] bg-white" src="/user.png" alt="/" />
                    <h2 className="text-2xl font-bold text-center py-8">Master Account</h2>
                    <p className="text-4xl text-center font-bold">$200</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">$500 Maximum Withdrawal</p>
                        <p className="py-2 border-b mx-8 mt-8">Unlimited Transfer Per Day</p>
                        <p className="py-2 border-b mx-8 mt-8">Unlimited Features</p>
                    </div>
                    <button className="bg-[#574b90] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Start Trial</button>
                </div>
            </div>
        </div>
    )
}

export default Cards;