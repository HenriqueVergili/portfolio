// pages/index.tsx
import React from 'react';
import WaveSVG from '../components/onda';
import Header from '../components/header';

const HomePage: React.FC = () => {
  return (
    <div className='bg-gradient-qualidade container'>
      <Header/>
      <div className='flex justify-between mt-28'>
        <div className='[text-shadow:_-2px_5px_0_rgb(200_100_400_/_50%)]'>
          <p className='text-5xl font-bold ml-[380px]'>Habilidades de programação</p>
        <div className='mt-24 ml-[320px] list-disc'>
          <li className='text-4xl text-left mt-4'>React</li>
          <li className='text-4xl text-left mt-4'>React Native</li>
          <li className='text-4xl text-left mt-4'>Tailwind</li>
          <li className='text-4xl text-left mt-4'>Html</li>
          <li className='text-4xl text-left mt-4'>CSS</li>
          <li className='text-4xl text-left mt-4'>Flutter</li>
          <li className='text-4xl text-left mt-4'>mySQL</li>
          <li className='text-4xl text-left mt-4'>MongoDB</li>
        </div>
        </div>
        <div className='mr-80 mt-[-40px] [text-shadow:_4px_6px_0_rgb(0_0_0_/_60%)]'>
          <p className='text-5xl font-bold mt-16'>Soft Skills</p>
          <div className='mt-20 text-right'>
            <li className='text-4xl  ml-[146px] mt-4 flex'>Comunicação<span className="ml-2">•</span></li>
            <li className='text-4xl  ml-[66px] mt-4 flex'>Trabalho em Equipe<span className="ml-2">•</span></li>
            <li className='text-4xl ml-[133px] mt-4 flex'>Adaptabilidade<span className="ml-2">•</span></li>
            <li className='text-4xl  mt-4 flex'>Resolução de Problemas<span className="ml-2">•</span></li>
            <li className='text-4xl ml-[71px] mt-4 flex'>Trabalho em Equipe<span className="ml-2">•</span></li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
