import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import {useHistory} from 'react-router';
import './home.css';


const Home = () =>{
    const history = useHistory();
    const [userName, setUserName] = useState;

    const handleChange =(h) => {
        let value = h.target.value;
        setUserName(value);
    }

    const handleClick = (h) =>{
        h.preventDefault();
        axios.get(`https://api.github.com/users/${userName}`)
        .then(response => {
            history.push("./gitprofile", userName)
        })
    }

    return(
        <div className="container">
            <section className="discription">
                <h1>Github Profile</h1>
                <p>Generate your Github Profile</p>
            </section>

            <form className="form_part">
                <label className="label_part">Github Username</label>
                <div className="input_part">
                    <input type="text" className="name_input" value="userName"
                    onChange={handleChange}/>
                    <button type="submit" className="btn" onClick={handleClick}>Generate</button>
                </div>

            </form>

        </div>
    )

}

export default Home;