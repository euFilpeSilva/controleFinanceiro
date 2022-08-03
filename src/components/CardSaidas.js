import { ArrowCircleDown } from 'phosphor-react';

export default function CardSaidas() {
    return(
        <div className="card bg-slate-200 flex">
            <div className="gap-3 flex">
                <p>Saidas</p>
                <ArrowCircleDown size={30} color="#000" weight="light" />
            </div>
            <strong className="text-3xl">R$ 0.00</strong>
        </div>
    )
}