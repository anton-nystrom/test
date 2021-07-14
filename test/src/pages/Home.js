import React, {useState, useEffect} from "react";
import Axios from 'axios';

const Home = () => {
    const name = "Anton"
    const [namn, setNamn] = useState('');
    const [kunder, setKunder] = useState([]);
    const [anv, setAnv] = useState('');
    const [pass, setPass] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3001/api/get/').then((response) => {
          setKunder(response.data);
        });
      }, []);
    
    const submitNamn = () => {
        Axios.post('http://localhost:3001/api/submit', {
          namn: namn
        }).then(() => {
          alert('success');
        });
    };
    const submitUser = () => {
        Axios.post('http://localhost:3001/api/register', {
          anv: anv,
          pass: pass
        }).then(() => {
          alert('success');
        });
    };
    return (
        <div className="Home">
            <label htmlFor="">Namn:</label>
            <input type="text" name="namn" onChange={(e) => {
                setNamn(e.target.value);
            }} />
            <button onClick={submitNamn}>Submit</button>

            <label htmlFor="">Anv:</label>
            <input type="text" name="anv" onChange={(e) => {
                setAnv(e.target.value);
            }} />
            <label htmlFor="">Pass:</label>
            <input type="text" name="pass" onChange={(e) => {
                setPass(e.target.value);
            }} />
            <button onClick={submitUser}>Submit</button>

            {kunder.map((kund) => {
                return <h1>Namn: {kund.KundID}</h1>
            })}
        </div>
    )
}

export default Home