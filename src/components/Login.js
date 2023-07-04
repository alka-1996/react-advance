import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // const response = await fetch("${host}/posts/login",{
        //     method: "LOGIN",
        //     headers: {
        //         "Content-Type": "application/JSON",
        //     },
        //     body: JSON.stringify({ email: credentials.email, password: credentials.password })
        // });
        // const json = await response.json()
        // console.log(json);
        // if (JSON.success) {
        //     //save the auth token andedirect
        //     localStorage.setItem('token', json.authtoken)
        //     navigate.push("/")
        //     props.showAlert("Logged in successfully", "success")s

        let localData = localStorage.getItem('loginData') ? localStorage.getItem('loginData').push({email:credentials.email,password:credentials.password}) : [];
            localStorage.setItem('loginData',localData);
             navigate("/")
             props.showAlert("Invaild credentials", "danger");
        // }
        // else {
        //     props.showAlert("Invaild credentials", "danger");
        // }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }


    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" value={credentials.email} onChange={onChange} name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} id="password" onChange={onChange} name="password" />
                </div>

                <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Login;
