import Footer from '@/components/Footer';
import Header from '@/components/Header';
import {BsArrowRightCircle} from 'react-icons/bs';

export default function Home() {
  return (
    <div className="w-full m-auto px-2 max-md:px-6 max-w-5xl">
      <Header />
      <main className="">
        <div className="flex max-md:flex-wrap  gap-6 mt-10">
          <div className="flex gap-6 w-1/2 bg-[#1B1B1B] max-md:w-full p-6 rounded-2xl">
            <div className="w-1/2 bg-[#7B9CF0] rounded-br-3xl rounded-tl-3xl"></div>
            <div className="w-1/2">
              <strong className="text-[#797979] text-xs">DESENVOLVEDOR FULL-STACK</strong>
              <h1 className="py-2 text-4xl ">David Mendes</h1>
              <p className="text-sm text-[#797979] pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit... </p>
             
                <button>
                  <BsArrowRightCircle size={24} color="#797979" />
                </button>
            </div>           
          </div>
          <div className="w-1/2 max-md:w-full rounded-2xl">
            <div className="bg-[#1B1B1B] py-2 px-4 rounded-2xl">
              <ul className='flex text-xs text-[#797979] font-bold'>
                <li className='text-white'>HABILIDADES EM: </li>
                <li>&ensp; HTML &ensp;</li>
                <li className='text-white'> - </li>
                <li>&ensp;CSS&ensp;</li>
                <li className='text-white'> - </li>
                <li>&ensp;JS&ensp;</li>
                <li className='text-white'> - </li>
                <li>&ensp; ReactJS &ensp;</li>
                <li className='text-white'> - </li>
                <li>&ensp;Sass&ensp;</li>
                <li className='text-white'> - </li>
                <li>&ensp;Tailwind CSS&ensp;</li>
              </ul>
            </div>
            <div className="flex items-center justify-center gap-6 mt-4">
              <div className="flex flex-shrink flex-col h-52 gap-5 w-1/2 bg-[#1B1B1B] p-4 rounded-2xl">
                    <div className='w-20 h-20 bg-[#7B9CF0] rounded-2xl'></div>
                    <div className='flex items-end justify-between'>
                      <div>
                        <p className="text-[#797979] text-sm">Um pouco mais sobre mim</p>
                        <h3 className='mt-3'>Experiências Profissionais</h3>
                      </div>
                      <div >
                        <button>
                          <BsArrowRightCircle size={24} color="#797979" />
                        </button> 
                      </div>
                     
                    </div>
              </div>

              <div className="flex flex-col  gap-5 w-1/2 h-52 bg-[#1B1B1B] p-4 rounded-2xl">
                    <div className='w-20 h-20 bg-[#7B9CF0] rounded-2xl'></div>
                    <div className='flex items-end justify-between'>
                      <div>
                        <p className="text-[#797979] text-sm">Visualização</p>
                        <h3 className='mt-3'>Projetos <br /> Pessoais</h3>
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
              
            <div className="flex flex-col  gap-5 w-1/2 h-52 bg-[#1B1B1B] p-4 rounded-2xl">
                    <div className='w-20 h-20 bg-[#7B9CF0] rounded-2xl'></div>
                    <div className='flex items-end justify-between'>
                      <div>
                        <p className="text-[#797979] text-sm">Mídias Sociais</p>
                        <h3 className='mt-3'>Links <br />p/ Perfis</h3>
                      </div>
                      <div >
                        <button>
                          <BsArrowRightCircle size={24} color="#797979" />
                        </button> 
                      </div>
                     
                    </div>
              </div>

              <div className="flex flex-col  gap-5 w-1/2 h-52 bg-[#1B1B1B] p-4 rounded-2xl">
                    <div className='w-20 h-20 bg-[#7B9CF0] rounded-2xl'></div>
                    <div className='flex items-end justify-between'>
                      <div>
                        <p className="text-[#797979] text-sm">Especialização</p>
                        <h3 className='mt-3'>Educação <br />e Certificações</h3>
                      </div>
                      <div >
                        <button>
                          <BsArrowRightCircle size={24} color="#797979" />
                        </button> 
                      </div>
                     
                    </div>
              </div>
            </div>
              

            <div className="w-3/5 max-md:w-full max-md:order-1 bg-[#1B1B1B] p-4 rounded-2xl">
              <div className='w-ful'>
                <ul className='flex items-center justify-center gap-6'>
                  <li className='w-20 h-20 bg-[#7B9CF0] rounded-2xl'></li>
                  <li className='w-20 h-20 bg-[#7B9CF0] rounded-2xl'></li>
                  <li className='w-20 h-20 bg-[#7B9CF0] rounded-2xl'></li>
                  <li className='w-20 h-20 bg-[#7B9CF0] rounded-2xl'></li>
                  <li className='w-20 h-20 bg-[#7B9CF0] rounded-2xl'></li>
                </ul>
              </div>
              <div className='flex items-end justify-between mt-5'>
                      <div>
                        <p className="text-[#797979] text-sm">Tecnologias Usadas </p>
                        <h3 className='mt-3'>Habilidades <br />Técnicas</h3>
                      </div>
                      <div >
                        <button>
                          <BsArrowRightCircle size={24} color="#797979" />
                        </button> 
                      </div>
                     
              </div>
            </div>
            
        </div>
      </main>
      <Footer />
    </div>
  )
}
