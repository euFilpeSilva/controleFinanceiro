
import { ArrowCircleUp } from 'phosphor-react';

export default function CardEntradas() {
    return(
        <div className="card bg-slate-200 flex">
            <div className='flex gap-3'>
                <p>Entradas</p> 
                <ArrowCircleUp size={30} color="#000" weight="light" />
            </div>
            <strong className="text-3xl">R$ 0.00</strong>
        </div>
    )
}