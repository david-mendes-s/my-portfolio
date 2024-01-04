'use client'
import { BsList, BsXLg } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/Logo.png';

interface IHeader {
    visible: boolean;
    onVisible: () => void;
}

export default function Header({visible, onVisible}:IHeader){

    return(
        <header className="flex items-center justify-between py-6 relative scale-up-center">
            <Image src={Logo} alt='logo' className='w-36 h-auto'/>
            <ul className="flex items-center justify-center gap-10 max-md:hidden">
                <li className="text-[#555555] transform transition duration-500 hover:scale-[1.06] hover:text-[#fff]">
                    <Link href="/">Home</Link>
                </li>
                <li className="text-[#555555] transform transition duration-500 hover:scale-[1.06] hover:text-[#fff]">
                    <Link href="/about">Sobre</Link>
                </li>
                <li className="text-[#555555] transform transition duration-500 hover:scale-[1.06] hover:text-[#fff]">Habilidades</li>
                <li className="text-[#555555] transform transition duration-500 hover:scale-[1.06] hover:text-[#fff]">
                    <Link href="/contact">Contato</Link>
                </li>
            </ul>
            <Link href="/projects" className='max-md:hidden'>
                <button 
                    type='button'  
                    className="bg-[#323232] px-5 py-2 rounded-md text-[14px] text-white transform transition duration-500 hover:scale-[1.06]">
                    Projetos
                </button>
            </Link>
            <button 
                onClick={() => onVisible()}
                className='hidden max-md:flex'>
                    {visible === true ? <></> : <BsList size={26} color={'#fff'}/>}
            </button>

            
            
        </header>
    );
}