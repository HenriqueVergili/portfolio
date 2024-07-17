// pages/index.tsx
import React from 'react';
import Header1 from './components/header1';
import Retrato from './components/retrato';


const HomePage: React.FC = () => {
  return (
    <div className='bg-gradient-custom container'>
      <Header1/>
      <div className='flex justify-between'>
        <div className='animate-[tada_1s_ease-in-out]'>
          <p className='text-7xl font-bold ml-[200px] mt-[100px] [text-shadow:_0_8px_0_rgb(0_0_0_/_40%)]'> Olá! <br></br>Sou o Henrique, <br></br> desenvolvedor front-end</p>
          <p className='ml-[200px] text-4xl w-[600px] mt-4 [text-shadow:_0_-5px_0_rgb(0_0_0_/_40%)]'>Apaixonado por criar e estilizar sites e aplicativos mobile, com proficiência em tailwind, css, html e react.</p>
        </div>
        <div className='mr-48'>
          <Retrato/>
            <nav>
              <ul className="text-7xl font-thin space-x-0 space-y-2 ml-[320px] mt-[-570px] [text-shadow:_0_8px_0_rgb(0_0_0_/_40%)] animate-[spinner-grow_1s_ease-in-out]">
              <li><a href='/sobre' className=" hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-green-400 before:absolute before:left-0 before:bottom-0 ">Sobre</a></li>
              <li><a href="/projetos" className="hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-green-400 before:absolute before:left-0 before:bottom-0">Projetos</a></li>
              <li><a href="/formacao" className="hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-green-400 before:absolute before:left-0 before:bottom-0">Formação</a></li>
              <li><a href="/qualidades" className="hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-green-400 before:absolute before:left-0 before:bottom-0">Qualidades</a></li>
              <li><a href="/contato" className="hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-green-400 before:absolute before:left-0 before:bottom-0">Contato</a></li>
              </ul>
            </nav>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
};

export default HomePage;
