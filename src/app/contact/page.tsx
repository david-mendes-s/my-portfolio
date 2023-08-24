import {BsFillEnvelopeAtFill, BsFillTelephonePlusFill, BsGithub, BsLinkedin} from 'react-icons/bs';
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Contact(){
    return(
        <div className="w-full m-auto px-2 max-md:px-6 max-w-5xl">
            <Header />
            <main className='flex mt-10 gap-12'>
                <div>
                    <h3 className=''>INFORMAÇÕES DE CONTATO</h3>
                    <ul className='flex flex-col gap-4 mt-6'>
                        <li className='flex gap-4'>
                            <div className='flex justify-center items-center w-16 h-16 bg-[#1B1B1B] p-2 rounded-2xl'>
                                <BsFillEnvelopeAtFill size={22} color="#fff" />
                            </div>
                            <div>
                                <p className="text-[#797979] text-sm ">Email</p>
                                <p className="text-white text-sm mt-1">davidsmendess@gmail.com</p>                               
                            </div>
                        </li>
                        <li className='my-3 flex gap-4 '>
                            <div className='flex justify-center items-center w-16 h-16 bg-[#1B1B1B] p-2 rounded-2xl'>
                                <BsFillTelephonePlusFill size={20} color="#fff" />
                            </div>
                            <div>
                                <p className="text-[#797979] text-sm ">Telefone</p>
                                <p className="text-white text-sm mt-1">+55 85 992645713</p>                               
                            </div>
                        </li>
                        
                    </ul>
                    <h3 className="mt-5">SOCIAL INFO</h3>
                    <ul className="flex justify-between gap-4 my-4">
                        <li className="w-16 h-16 rounded-[50%] bg-[#272727] flex items-center justify-center">
                            <BsGithub size={24} color="#fff" />
                        </li>
                        <li className="w-16 h-16 rounded-[50%] bg-[#272727] flex items-center justify-center">
                            <BsLinkedin size={21} color="#fff" />
                        </li>
                        <li className="w-16 h-16 rounded-[50%] bg-[#272727] flex items-center justify-center">
                            <BsFillEnvelopeAtFill size={21} color="#fff" />
                        </li>
                    </ul>
                </div>
                <div className='w-full'>
                    <form className='bg-[#272727] w-full rounded-2xl px-6 py-8'>
                        <h1 className='mb-5 text-3xl font-semibold'>Vamos trabalhar <strong className='text-[#5873EC]'>juntos.</strong></h1>
                        <input type="text" className='w-full px-3 py-3 bg-[#232323] text-xs outline-none rounded-md' placeholder='Nome*' />
                        <input type="email" className='w-full px-3 py-3 mt-3 bg-[#232323] text-xs outline-none rounded-md' placeholder='Email*' />
                        <input type="text" className='w-full px-3 py-3 mt-3 bg-[#232323] text-xs outline-none rounded-md' placeholder='Seu Objetivo*' />
                        <textarea className='w-full px-3 py-3 mt-3 bg-[#232323] text-xs outline-none rounded-md' placeholder='Sua Mensagem...*' />
                        <button className='mt-3 bg-[#323232] p-3 w-full rounded-md text-[14px] text-white '>Enviar sua mensagem</button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
        
    );
}