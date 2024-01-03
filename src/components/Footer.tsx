'use clinte'
import Image from 'next/image';
import Logo from '../../public/Logo.png';
export default function Footer(){
    return(
        <footer className="flex flex-col items-center justify-center my-10 text-sm gap-4">
            <Image src={Logo} alt='logo' className='w-24 h-auto'/>
            <ul className="flex items-center justify-center gap-10">
                <li >Home</li>
                <li className="text-[#555555]">Sobre</li>
                <li className="text-[#555555]">Habilidades</li>
                <li className="text-[#555555]">Contato</li>
            </ul>
            <p>Copyright &copy; 2023 - <small className="text-sm text-blue-600">David Mendes</small> </p>
      </footer>
    );
}