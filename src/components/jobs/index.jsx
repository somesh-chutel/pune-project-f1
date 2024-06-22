import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import './index.css';

const Jobs = ()=> {
    const navigate = useNavigate();
    const token = Cookies.get("jwtToken");

    useEffect(()=>{
        if(token === undefined){
            navigate("/login");
        }
    })



    return (

        <h1> Jobs Section </h1>
    )
}




export default Jobs;
