import { useState } from 'react'
import './tabela.scss'

import axios from 'axios'

import { Link } from 'react-router-dom';



export default function Consultar() {
    const [cliente, setcliente] = useState([]);


    async function buscar() {
        const url = 'http://localhost:5010/cliente/';
        let resp = await axios.get(url);
        setcliente(resp.data);
    }

    

    return (
        <div className='pagina-consultar'>
            <h1> CONSULTAR </h1>

            <button onClick={buscar}>Buscar</button>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>data de nascimento</th>
                        <th>telefone</th>
                        <th>cpf</th>
                        <th>medidas</th>
                        <th>observacoes</th>
                        <th>email</th>
                        <th>Alterar</th>
                    </tr>
                </thead>

                <tbody>
                    {cliente.map(item => 
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{new Date(item.data_Nascimento).toLocaleDateString()}</td>
                            <td>{item.telefone}</td>
                            <td>{item.cpf}</td>
                            <td>{item.medidas}</td>
                            <td>{item.observacoes}</td>
                            <td>{item.email}</td>
                            <td> <Link to={`/${item.id}`}> alterar</Link> </td>
                        </tr>
                    )}
                </tbody>

            </table>

           
        </div>
    )
}