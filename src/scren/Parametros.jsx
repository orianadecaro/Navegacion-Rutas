import React from 'react';
import { Link } from "react-router-dom";

function Parametros() {
    
        const [usuarios, setUsuarios] = React.useState([])

        React.useEffect(() => {
            fetchData();
        }, [])
    
        const fetchData = async () => {
            const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations');
            const users = await data.json();
            // console.log(users)
            setUsuarios(users.civilizations)
        }
    
        return (
            <div>
                <ul>
                    {
                        usuarios.map(item => (
                            <li key={item.id}>
                                <Link to={`/parametros/${item.id}`}>{item.name}-{item.expansion}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        
    
    )
}

export default Parametros;
