
import { useEffect, useState } from 'react'
import './App.scss'

import axios from 'axios'
import { useParams } from 'react-router-dom';



export default function Cadastrar() {
    const [nome, setNome] = useState('');
    const [nascimento, setnascimento] = useState('');
    const [telefone, settelefone] = useState('');
    const [cpf, setcpf] = useState('');
    const [medidas, setmedidas] = useState('');
    const [observacoes, setobservacoes] = useState('');
    const [email, setemail] = useState('');

    const { id } = useParams( )


    async function salvar() {
        let paramCorpo = {
            "nome": nome,
            "data_Nascimento": nascimento,
            "telefone": telefone,
            "cpf": cpf,
            "medidas": medidas,
            "observacoes": observacoes,
            "E_Mail": email
        }
        console.log(paramCorpo)
        console.log(nome)

        if (id == undefined) {
            //Inserir
            const url = 'http://localhost:5010/cliente/';
            let resp = await axios.post(url, paramCorpo);
          

            alert('Pessoa adicionada ao registro é Id: ' + resp.data.id);
        } else {


            //alterar
            const url = `http://localhost:5010/cliente/${id}`
            let resp = await axios.put(url, paramCorpo);
            alert( 'Pessoa alterada  ao registro é Id: ' + id);


        }



    }

    async function Buscar() {
        const url = `http://localhost:5010/cliente/${id}`;
        let resp = await axios.get(url);
        console.log(resp.data)
        setNome(resp.data.nome)
        setnascimento(resp.data.data_Nascimento)
        settelefone(resp.data.telefone)
        setcpf(resp.data.cpf)
        setmedidas(resp.data.medidas)
        setobservacoes(resp.data.observacoes)
        setemail(resp.data.email)





    }


    useEffect(() => {
        Buscar()

    }, [])

    return (
        <div className='pagina-cadastrar'>
            <h1> CADASTRAR </h1>


            <div className='form'>
                <div>
                    <label>Nome:</label>
                    <input type='text' value={nome} onChange={e => setNome(e.target.value)} />
                </div>
                <div>
                    <label>Data de nascimento:</label>
                    <input type='date' value={nascimento} onChange={e => setnascimento(e.target.value)} />
                </div>
                <div>
                    <label>Telefone:</label>
                    <input type='number' value={telefone} onChange={e => settelefone(e.target.value)} />
                </div>
                <div>
                    <label>CPF</label>
                    <input type='text' value={cpf
                    } onChange={e => setcpf(e.target.value)} />
                </div>
                <div>
                    <label>Medidas:</label>
                    <input type='text' value={medidas} onChange={e => setmedidas(e.target.value)} />
                </div>
                <div>
                    <label>Observações:</label>
                    <input type='text' value={observacoes} onChange={e => setobservacoes(e.target.value)} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type='text' value={email} onChange={e => setemail(e.target.value)} />
                </div>

            </div>
            <button onClick={salvar}> SALVAR </button>

        </div>
    )
}