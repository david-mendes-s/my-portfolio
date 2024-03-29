
import {BsGithub, BsLinkedin, BsFillEnvelopeAtFill} from 'react-icons/bs';

export default function About(){
    return(
        
            <main className="flex mt-10 gap-12">
                <div className="w-1/4 max-lg:hidden">
                    <div className="bg-[#1B1B1B] rounded-2xl p-6 flex flex-col items-center justify-center ">
                        <div className="w-40 h-40 bg-[#7B9CF0] rounded-2xl "></div>
                        <h1 className="pt-2 text-xl mt-3 font-semibold">David Mendes</h1>
                        <p className="text-sm text-[#797979]">@david_andersonss</p>
                        <ul className="flex gap-4 my-4">
                            <li className="w-12 h-12 rounded-[50%] bg-[#272727] flex items-center justify-center">
                                <BsGithub size={24} color="#fff" />
                            </li>
                            <li className="w-12 h-12 rounded-[50%] bg-[#272727] flex items-center justify-center">
                                <BsLinkedin size={21} color="#fff" />
                            </li>
                            <li className="w-12 h-12 rounded-[50%] bg-[#272727] flex items-center justify-center">
                                <BsFillEnvelopeAtFill size={21} color="#fff" />
                            </li>
                        </ul>
                        <button className="bg-[#323232] w-full px-4 py-2 mt-3 rounded-md text-sm">Contate-me</button>
                    </div>
                </div>
                <div className="w-3/4 max-lg:w-full max-lg:">
                    <h1 className='text-xl'>SOBRE MIM</h1>
                    <p className="text-sm text-[#797979] mt-4">
                    It is a long established fact that a reader will be distracted 
                    by the readable content of a page when looking.
                    </p>

                    <p className="text-sm text-[#797979] mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsa officiis vel obcaecati nam voluptatem nostrum porro dicta quas neque,
                        tenetur, repellendus ipsam mollitia dolor, enim animi eveniet veritatis. Quos, vel?
                    </p>
                    <h3 className='text-lg mt-12 mb-4'>EXPERIÊNCIAS</h3>
                    <strong className='text-[#797979] font-bold text-sm mt-4'>2022 - Momento Atual</strong>
                    <p className="text-[#5873EC] font-semibold mt-1"> Instrutor e Desenvolvedor Full-Stack</p>
                    <p className="text-[#797979] text-xs mt-1 font-semibold">DevBoost</p>
                    <p className='text-[#797979] text-sm mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ducimus, non adipisci, sed perspiciatis veritatis excepturi error ea nam 
                        fugiat corrupti ex architecto magni! Cum fuga commodi maxime voluptatum. Tempore, rerum!
                    </p>
                    <p className='text-[#797979] text-sm mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ducimus, non adipisci, sed perspiciatis veritatis excepturi error ea nam 
                        fugiat corrupti ex architecto magni! Cum fuga commodi maxime voluptatum. Tempore, rerum!
                    </p>

                    <h3 className='text-lg mt-12 mb-4'>EDUCAÇÃO</h3>
                    <strong className='text-[#797979] font-bold text-sm mt-4'>2014 - 2016</strong>
                    <p className="text-[#5873EC] font-semibold mt-1"> Técnico em Informática</p>
                    <p className="text-[#797979] text-xs mt-1 font-semibold">EEEP Maria Dolores Alcantâra e Silva</p>
                    <p className='text-[#797979] text-sm mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ducimus, non adipisci, sed perspiciatis veritatis excepturi error ea nam 
                        fugiat corrupti ex architecto magni! Cum fuga commodi maxime voluptatum. Tempore, rerum!
                    </p>
                    <p className='text-[#797979] text-sm mt-4 mb-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ducimus, non adipisci, sed perspiciatis veritatis excepturi error ea nam 
                        fugiat corrupti ex architecto magni! Cum fuga commodi maxime voluptatum. Tempore, rerum!
                    </p>

                    <strong className='text-[#797979] font-bold text-sm mt-4'>2019 - Momento Atual</strong>
                    <p className="text-[#5873EC] font-semibold mt-1">Engenharia de Computação </p>
                    <p className="text-[#797979] text-xs mt-1 font-semibold">Universidade Federal do Ceará</p>
                    <p className='text-[#797979] text-sm mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ducimus, non adipisci, sed perspiciatis veritatis excepturi error ea nam 
                        fugiat corrupti ex architecto magni! Cum fuga commodi maxime voluptatum. Tempore, rerum!
                    </p>
                    <p className='text-[#797979] text-sm mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ducimus, non adipisci, sed perspiciatis veritatis excepturi error ea nam 
                        fugiat corrupti ex architecto magni! Cum fuga commodi maxime voluptatum. Tempore, rerum!
                    </p>

                    <h3 className='text-lg mt-12 mb-4'>SKILLS</h3>
                    <ul className="grid grid-cols-2 gap-5 mb-8">
                        <li>
                            <p className='text-[#797979] font-semibold text-sm'>95%</p>
                            <p>JavaScript</p>
                            <p className='text-[#797979] text-sm'>Em Desenvolvimento</p>
                        </li>
                        <li>
                            <p className='text-[#797979] font-semibold text-sm'>85%</p>
                            <p>ReactJS</p>
                            <p className='text-[#797979] text-sm'>Em Desenvolvimento</p>
                        </li>
                        <li>
                            <p className='text-[#797979] font-semibold text-sm'>75%</p>
                            <p>TypeScript</p>
                            <p className='text-[#797979] text-sm'>Em Desenvolvimento</p>
                        </li>
                        <li>
                            <p className='text-[#797979] font-semibold text-sm'>65%</p>
                            <p>NextJS</p>
                            <p className='text-[#797979] text-sm'>Em Desenvolvimento</p>
                        </li>
                        <li>
                            <p className='text-[#797979] font-semibold text-sm'>65%</p>
                            <p>NextJS</p>
                            <p className='text-[#797979] text-sm'>Em Desenvolvimento</p>
                        </li>
                        <li>
                            <p className='text-[#797979] font-semibold text-sm'>65%</p>
                            <p>NextJS</p>
                            <p className='text-[#797979] text-sm'>Em Desenvolvimento</p>
                        </li>
                    </ul>
                    
                </div>
            </main>
        
    );
}