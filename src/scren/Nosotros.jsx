import React, { useEffect, useState } from 'react';

function Nosotros() {
    const [equipo, setEquipo] = useState([]);

    //funcion asincrona para consumir datos dinamicos de la api
    const obtenerDatos = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await data.json();
        setEquipo(users);

    }

    useEffect(() => {
       // console.log('useEffect');
        //  document.title ='useEffect'// cambia el titulo del documento
        obtenerDatos()
    }, []);

    return (
        <div>
            <h1>Nosotros</h1>
            <ul>
                {
                    equipo.map(item => (
                                 <li key={item.id}> {item.name} - {item.email} </li>                    
                          ))
                }
            </ul>
        </div >
    )
}

export default Nosotros;
