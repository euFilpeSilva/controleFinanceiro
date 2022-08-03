import CardEntradas from './CardEntradas';
import CardSaidas from './CardSaidas';
import CardTotal from './CardTotal';

export default function Resumo() {
    return(
        <div className="resumo">
            <CardEntradas title="Entradas"/>
            <CardSaidas />
            <CardTotal />
        </div>
    )
}