import Link from "next/link";

interface IMenuModal {
    onVisible: () => void;
}

export default function MenuModal({onVisible}:IMenuModal){
    return(
            
                <div className="w-full bottom-0 left-0 h-full fixed md:hidden">
                    <div className=" bg-[#323232] opacity-75 px-6 py-6 w-full h-1/3 flex justify-end">
                        <button onClick={()=> onVisible()} className="w-full h-full">
                            
                        </button>
                    </div>
                    <div className=" bg-[#323232]  w-full h-2/3 flex items-center justify-center">
                        
                        <ul className="flex flex-col items-center justify-center gap-10">
                            
                            <li>
                                <Link href="/" onClick={()=> onVisible()}>Home</Link>
                            </li>
                            <li className="text-[#fff]">
                                <Link href="/about" onClick={()=> onVisible()}>Sobre</Link>
                            </li>
                            <li className="text-[#fff]">Habilidades</li>
                            <li className="text-[#fff]">
                                <Link href="/contact" onClick={()=> onVisible()}>Contato</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            
            
    );
}