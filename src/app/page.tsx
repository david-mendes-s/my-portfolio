"use client";
import {useState} from 'react';
import {BsArrowRightCircle, BsBuildingCheck, BsColumns, BsInstagram, BsJournalCheck} from 'react-icons/bs';
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript, IoLogoNodejs } from 'react-icons/io';
import { BiLogoReact } from 'react-icons/bi';
import Carrossel from "@/components/Carrossel";


export default function Home() {

  const [tech, setTech] = useState([
    "HTML",
    "CSS",
    "JS",
    "WORDPRESS",
    "NODE",
    "REACT",
    "POSTGRES",
    "JAVA",
    "SPRINGBOOT",
    "HTML",
    "CSS",
    "JS",
    "WORDPRESS",
    "NODE",
    "REACT",
    "POSTGRES",
    "JAVA",
    "SPRINGBOOT",
  ]);

  const icons = [
    <IoLogoHtml5 size={50} color='#fff'/>, 
    <IoLogoCss3 size={50} color='#fff'/>,
    <IoLogoJavascript size={50} color='#fff'/>,
    <BiLogoReact size={50} color='#fff'/>,
    <IoLogoNodejs size={50} color='#fff'/>,
    <IoLogoHtml5 size={50} color='#fff'/>, 
    <IoLogoCss3 size={50} color='#fff'/>,
    <IoLogoJavascript size={50} color='#fff'/>,
    <BiLogoReact size={50} color='#fff'/>,
    <IoLogoNodejs size={50} color='#fff'/>,
    <IoLogoNodejs size={50} color='#fff'/>,
    <IoLogoHtml5 size={50} color='#fff'/>, 
    <IoLogoCss3 size={50} color='#fff'/>,
    <IoLogoJavascript size={50} color='#fff'/>,
    <BiLogoReact size={50} color='#fff'/>,
    <IoLogoNodejs size={50} color='#fff'/>,
    <IoLogoNodejs size={50} color='#fff'/>,
    <IoLogoNodejs size={50} color='#fff'/>,
    <IoLogoHtml5 size={50} color='#fff'/>, 
    <IoLogoCss3 size={50} color='#fff'/>,
    <IoLogoJavascript size={50} color='#fff'/>,
    <BiLogoReact size={50} color='#fff'/>,
    <IoLogoNodejs size={50} color='#fff'/>,
  ];


  return (
      <main className="">
        <div className="flex max-md:flex-wrap  gap-6 mt-10">
          <div className="flex max-sm:flex-col  max-sm:justify-center max-sm:items-center gap-6 w-1/2 bg-[#1B1B1B] max-md:w-full p-6 rounded-2xl hover:transform hover:transition hover:duration-500 hover:scale-[1.06]">
            <div className="flex   items-end justify-start  w-1/2 max-sm:h-52 bg-[#7B9CF0] rounded-br-3xl rounded-tl-3xl">
              {/* <Image src={Avatar} alt='logo' className='w-72 h-auto rounded-br-3xl'/> */}
            </div>
            <div className="w-1/2 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center ">
              <strong className="text-[#797979] text-xs max-sm:text-center">DESENVOLVEDOR FULL-STACK</strong>
              <h1 className="py-2 text-4xl max-sm:text-center">David Mendes</h1>
              <p className="text-sm text-[#797979] pb-4 max-sm:text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit... </p>
             
                <button>
                  <BsArrowRightCircle size={24} color="#797979" />
                </button>
            </div>           
          </div>
          <div className="w-1/2  max-md:w-full rounded-2xl ">
            <div className="bg-[#1B1B1B] py-2 px-4 rounded-2xl hover:transform hover:transition hover:duration-500 hover:scale-[1.06]">
              <ul className='flex flex-nowrap text-xs text-[#797979] font-bold'>
                <li className='text-white px-[3px]'>SKILS:</li>
                <Carrossel elements={tech} width="330"/>
              </ul>
            </div>
            <div className="flex items-center justify-center gap-6 mt-4">
              <div className="transform transition duration-500 hover:scale-[1.06] flex  flex-col justify-between gap-5 w-1/2 h-52 bg-[#1B1B1B] p-4 rounded-2xl">
                    <div className='flex items-end max-lg:flex-shrink-0 w-20 h-20  rounded-2xl'>
                      <BsBuildingCheck size={45} color='#fff'/>
                    </div>
                    <div className='flex items-end justify-between'>
                      <div>
                        <p className="text-[#797979] text-sm max-lg:text-xs">Um pouco mais sobre mim</p>
                        <h3 className='mt-2 max-lg:text-sm'>Experiências <br />Profissionais</h3>
                      </div>
                      <div >
                        <button>
                          <BsArrowRightCircle size={24} color="#797979" />
                        </button> 
                      </div>
                     
                    </div>
              </div>

              <div className="flex  flex-col justify-between gap-5 w-1/2 h-52  bg-[#1B1B1B] p-4 rounded-2xl transform transition duration-500 hover:scale-[1.06]">
                    <div className='flex items-end w-20 h-20 max-lg:flex-shrink-0  rounded-2xl'>
                    
                      <BsColumns size={45} color='#fff'/>
                    </div>
                    <div className='flex items-end justify-between'>
                      <div>
                        <p className="text-[#797979] text-sm max-lg:text-xs">Visualização</p>
                        <h3 className='mt-2 max-lg:text-sm'>Projetos <br /> Pessoais</h3>
                      </div>
                      <div >
                        <button>
                          <BsArrowRightCircle size={24} color="#797979" />
                        </button> 
                      </div>
                     
                    </div>
              </div>
              
            </div>
          </div>
        </div>

        <div className="flex max-md:flex-wrap gap-6 mt-8">
          <div className="flex w-2/5 gap-6 max-md:w-full max-md:order-2">
              
            <div className="flex flex-col  gap-5 w-1/2 h-52 bg-[#1B1B1B] p-4 rounded-2xl transform transition duration-500 hover:scale-[1.06]">
                    <div className='flex items-end w-20 h-20 max-sm:flex-shrink-0 rounded-2xl'>
                      <BsInstagram size={45} color='#fff'/>
                    
                    </div>
                    <div className='flex items-end justify-between'>
                      <div>
                        <p className="text-[#797979] text-sm max-sm:text-xs">Mídias Sociais</p>
                        <h3 className='mt-2 max-sm:text-sm'>Links <br />p/ Perfis</h3>
                      </div>
                      <div >
                        <button>
                          <BsArrowRightCircle size={24} color="#797979" />
                        </button> 
                      </div>
                     
                    </div>
              </div>

              <div className="flex flex-col gap-5 w-1/2 h-52 bg-[#1B1B1B] p-4 rounded-2xl transform transition duration-500 hover:scale-[1.06]">
                    <div className='flex items-end w-20 h-20 max-sm:flex-shrink-0 rounded-2xl'>
                      <BsJournalCheck size={45} color='#fff'/>
                    
                    </div>
                    <div className='flex items-end justify-between'>
                      <div>
                        <p className="text-[#797979] text-sm max-sm:text-xs">Especialização</p>
                        <h3 className='mt-2 max-sm:text-sm'>Educação <br />e Certificações</h3>
                      </div>
                      <div >
                        <button>
                          <BsArrowRightCircle size={24} color="#797979" />
                        </button> 
                      </div>
                     
                    </div>
              </div>
            </div>
              

            <div className="w-3/5 max-md:w-full max-md:order-1 bg-[#1B1B1B] p-4 rounded-2xl transform transition duration-500 hover:scale-[1.06] ">
              <div className='w-ful'>
                <ul className='flex items-center  w-full justify-center gap-6 overflow-x-hidden'>
                    
                    
                    <li className='flex items-end w-20 h-20 rounded-2xl'>
                      <IoLogoHtml5 size={50} color='#fff'/>
                    </li>

                    <li className='flex items-end w-20 h-20 rounded-2xl'>
                      <IoLogoCss3 size={50} color='#fff'/>
                    </li>

                    <li className='flex items-end w-20 h-20 rounded-2xl'>
                      <IoLogoJavascript size={50} color='#fff'/>
                    </li>

                    <li className='flex items-end w-20 h-20 rounded-2xl'>
                      <BiLogoReact size={50} color='#fff'/>
                    </li>

                    <li className='flex items-end w-20 h-20 rounded-2xl'>
                      <IoLogoNodejs size={50} color='#fff'/>
                    </li>

                </ul>
              </div>
              <div className='flex items-end justify-between mt-5'>
                  <div>
                    <p className="text-[#797979] text-sm">Tecnologias Usadas </p>
                    <h3 className='mt-3'>Habilidades <br />Técnicas</h3>
                  </div>
                  <div>
                    <button>
                      <BsArrowRightCircle size={24} color="#797979" />
                    </button> 
                  </div>
              </div>
            </div>
            
        </div>
        
      </main>
      
    
  )
}
