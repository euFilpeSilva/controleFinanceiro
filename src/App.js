import Navbar from './components/Navbar';
import Resumo from './components/Resumo';
import Calculos from './components/Calculos';
import Descricao from './components/Descricao';

export default function App() {
  return (
    <div >
      <Navbar />
      <Resumo />
      <div className='flex items-center justify-center'>
        <Calculos />
      </div>
      <div className='flex items-center justify-center'>
        <Descricao />
      </div>
    </div>
  );
}

