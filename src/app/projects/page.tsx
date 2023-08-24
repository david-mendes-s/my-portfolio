import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { BsArrowRightCircle } from "react-icons/bs";

export default function Projects(){
    return(
        <div className="w-full m-auto px-2 max-md:px-6 max-w-5xl">
            <Header />
            <main className="flex mt-10 gap-12">
                <div className="flex w-full items-center justify-center flex-col">
                    <h1 className="text-3xl font-semibold">* PRINCIPAIS PROJETOS *</h1>
                    <div className="my-10">
                        <ul className="grid grid-cols-3 gap-10">
                            <li className="bg-[#1B1B1B] p-3 rounded-2xl">
                                <div className="w-52 h-40 bg-[#7B9CF0] rounded-2xl "></div>
                                <div className='flex flex-col p-1'>
                                    <div>
                                        <p className="text-[#797979] text-sm mt-3">Habits</p>                                       
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <h3 className='mt-1'>App de Hábitos</h3>
                                        <button>
                                            <BsArrowRightCircle size={24} color="#797979" />
                                        </button> 
                                    </div>
                                    
                                </div>
                            </li>
                            
                            <li className="bg-[#1B1B1B] p-3 rounded-2xl">
                                <div className="w-52 h-40 bg-[#7B9CF0] rounded-2xl "></div>
                                <div className='flex flex-col p-1'>
                                    <div>
                                        <p className="text-[#797979] text-sm mt-3">Habits</p>                                       
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <h3 className='mt-1'>App de Hábitos</h3>
                                        <button>
                                            <BsArrowRightCircle size={24} color="#797979" />
                                        </button> 
                                    </div>
                                    
                                </div>
                            </li>

                            <li className="bg-[#1B1B1B] p-3 rounded-2xl">
                                <div className="w-52 h-40 bg-[#7B9CF0] rounded-2xl "></div>
                                <div className='flex flex-col p-1'>
                                    <div>
                                        <p className="text-[#797979] text-sm mt-3">Habits</p>                                       
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <h3 className='mt-1'>App de Hábitos</h3>
                                        <button>
                                            <BsArrowRightCircle size={24} color="#797979" />
                                        </button> 
                                    </div>
                                    
                                </div>
                            </li>

                            <li className="bg-[#1B1B1B] p-3 rounded-2xl">
                                <div className="w-52 h-40 bg-[#7B9CF0] rounded-2xl "></div>
                                <div className='flex flex-col p-1'>
                                    <div>
                                        <p className="text-[#797979] text-sm mt-3">Habits</p>                                       
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <h3 className='mt-1'>App de Hábitos</h3>
                                        <button>
                                            <BsArrowRightCircle size={24} color="#797979" />
                                        </button> 
                                    </div>
                                    
                                </div>
                            </li>

                            <li className="bg-[#1B1B1B] p-3 rounded-2xl">
                                <div className="w-52 h-40 bg-[#7B9CF0] rounded-2xl "></div>
                                <div className='flex flex-col p-1'>
                                    <div>
                                        <p className="text-[#797979] text-sm mt-3">Habits</p>                                       
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <h3 className='mt-1'>App de Hábitos</h3>
                                        <button>
                                            <BsArrowRightCircle size={24} color="#797979" />
                                        </button> 
                                    </div>
                                    
                                </div>
                            </li>

                            <li className="bg-[#1B1B1B] p-3 rounded-2xl">
                                <div className="w-52 h-40 bg-[#7B9CF0] rounded-2xl "></div>
                                <div className='flex flex-col p-1'>
                                    <div>
                                        <p className="text-[#797979] text-sm mt-3">Habits</p>                                       
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <h3 className='mt-1'>App de Hábitos</h3>
                                        <button>
                                            <BsArrowRightCircle size={24} color="#797979" />
                                        </button> 
                                    </div>
                                    
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}