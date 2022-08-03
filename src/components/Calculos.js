import React, { useState } from "react";

export default function Calculos() {
    const [amount, setAmount] = useState([])

    return(
        <div className=" calculos bg-slate-200 flex gap-5">
            <div className="ml-10">
                <p>Descrição</p>
                <input type="text" ></input>
            </div>
            <div>
                <p>Valor</p>
                <input value={amount} type="number" onChange={(e) => setAmount(e.target.value)}></input>
            </div>
            <div className=" flex gap-5">
                <div>
                    <input type="radio" name="texto" />
                        <label>Entrada</label>
                </div>
                <div>
                    <input type="radio"  name="texto"/>
                        <label>Saida</label>
                </div>
            </div>
            <button className="bg-teal-600 p-5 rounded text-white">Adicionar</button>
            
        </div>
    )
}


	