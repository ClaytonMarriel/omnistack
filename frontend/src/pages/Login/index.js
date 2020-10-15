import React, { useState } from 'react'
import api from '../../services/api'

export default function Login({ history }) {
    const [email, setEmail] = useState('') // criação de estado, onde retorna um vetor com duas posições

    async function handleSubmit(event) {
        event.preventDefault()

        const response = await api.post('/sessions', { email }) // vai aguardar a finalização da chamada a API
        // Logo após irá armazenar a resposta no response

        const { _id } = response.data // desustruturação para pegar apenas o ID o usuário logado

        localStorage.setItem('user', _id) // Armazena o ID do usuário logado
        history.push('/dashboard') // Navega para a próxima página
    }

    return (
        <>

            <p>
                Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong>para sua empresa
        </p>
            <form onSubmit={handleSubmit}>
                <input
                    id="email"
                    type="email"
                    placeholder="Seu melhor e-mail"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />

                <button className="btn" type="submit">Entrar</button>
            </form>
        </>
    )
}
