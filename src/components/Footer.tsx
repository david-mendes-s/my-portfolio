'use clinte'
export default function Footer(){
    return(
        <footer className="flex flex-col items-center justify-center my-10 text-sm gap-4">
            <h3>Logo</h3>
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