import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
        const [credentials, setCredentials] = useState({ name:"",email: "", password: "",cpassword:"" })
        const navigate = useNavigate();

        const handleSubmit = async (e) => {
            e.preventDefault();
            // const response = await fetch("${host}/posts/signup",{
            //   method: "SIGNUP",
            //     headers: {
            //          "Content-Type": "application/JSON",
            //      },
            //     body:JSON.stringify ({email:credentials.email,password:credentials.password})
            //  });     
            //  const json = await response.json()
            // console.log(json);
            // if (JSON.success) {
                //save the auth token andedirect
            // localStorage.setItem('token', JSON.authtoken)
            let localData = localStorage.getItem('signupData') ? localStorage.getItem('signupData').push({email:credentials.email,password:credentials.password}) : [];
            localStorage.setItem('signupData',localData);
             navigate("/")
             props.showAlert("Account created successfully","success")

                
    //  }
    //         else {
    //             props.showAlert("Invaild details","danger");
    //        }
        }
        const onChange = (e) => {
            setCredentials({ ...credentials, [e.target.name]: e.target.value });
        }

        return (
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name </label>
                        <input type="text" className="form-control" id="name" name="name" onChange={onChange} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email"name="email" onChange={onChange} aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cpassword" className="form-label">ConformPassword</label>
                        <input type="password" className="form-control" id="cpassword" name="cpassword"onChange={onChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }

    export default Signup;
