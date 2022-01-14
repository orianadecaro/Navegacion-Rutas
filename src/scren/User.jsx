import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';


function User() {
    // console.log(useParams())
    const { id } = useParams();
    // console.log(id)

    const [pueblo, setPueblo] = useState({})

    useEffect(() => { 
        const fetchData = async () => {
        const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations/${id}`)
        const users = await data.json()
        //  console.log(user)
        setPueblo(users)
    }
        fetchData()
    }, [id])

    return (
        <div>
            <h3>{pueblo.name}</h3>
            <p>{pueblo.team_bonus}</p>
        </div>
    )
}

export default User;
