import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import './styles.css'

export default function Dashboard() {
    const [spots, setSpots] = useState(['']) //Estado 

    useEffect(() => {
        async function loadSposts() { //carregando spots
            const user_id = localStorage.getItem('user') // pegando o usuário logado
            const response = await api.get('/dashboard', { //
                headers: { user_id }
            })

            setSpots(response.data)
        }

        loadSposts()
    }, [])
    return (
        <>
            <ul className="spot-list">
                {spots.map(spot => (
                    <li key={spot._id}>
                        <header style={{ backgroundImage: `url(${spot.thumbmail_url})` }} />
                        <strong>{spot.company}</strong>
                        <span>{spot.price ? `R$${spot.price}/dia` : `GRATUITO`}</span>
                    </li>
                ))}
            </ul>

            <Link to="/new">
                <button className="btn">Cadastrar novo Spot</button>
            </Link>
        </>
    )
}