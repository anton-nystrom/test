import React, {useState, useEffect} from "react";
import Axios from 'axios';
import { IconContext } from "react-icons";
import { FcLock } from 'react-icons/fc';

    const Login = () => {
    const [anv, setAnv] = useState('');
    const [pass, setPass] = useState('');
    const [passDB, setPassDB] = useState([]);
    
    const login = () => {
        Axios.get('http://localhost:3001/api/login', {
            anv: anv
        }).then((response) => {
          setPassDB(response);
          console.log(passDB);
        });
    };
    
    return (
        <div className="login">
            <IconContext.Provider value={{ size:"120", className: "icon" }}>
                <FcLock />
            </IconContext.Provider>
            <input type="text" name="anv" placeholder="Anv.." onChange={(e) => {
                setAnv(e.target.value);
            }} />
            <input type="text" name="pass" placeholder="Pass.." onChange={(e) => {
                setPass(e.target.value);
            }} />
            <button onClick={login}>Login</button>
        </div>
    )
}

export default Login