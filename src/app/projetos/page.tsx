// pages/index.tsx
import React from 'react';
import WaveSVG from '../components/onda';
import Header from '../components/header';

const HomePage: React.FC = () => {
  return (
    <div className='container bg-projetos'>
      <Header/>
      <div className='text-center mt-44'>
        <div>
        <p className='text-9xl -rotate-12 font-bold text-yellow-400 w-[1800px]'> ATENÇÃO<br></br>TELA EM DESENVOLVIMENTO</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
