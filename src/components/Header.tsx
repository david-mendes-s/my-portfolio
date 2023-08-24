'use clinte'
export default function Header(){
    return(
        <header className="flex items-center justify-between py-6">
            <h3>Logo</h3>
            <ul className="flex items-center justify-center gap-10 max-md:hidden">
                <li >Home</li>
                <li className="text-[#555555]">Sobre</li>
                <li className="text-[#555555]">Habilidades</li>
                <li className="text-[#555555]">Contato</li>
            </ul>
            <button className="bg-[#323232] px-5 py-2 rounded-md text-[14px] text-white">Projetos</button>
        </header>
    );
}