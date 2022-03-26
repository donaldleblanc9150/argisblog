import { Link } from "react-router-dom";
import { useState } from "react";
import "./register.css"
import { axiosInstance } from "../../config";

export default function Register() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try{
            const res = await axiosInstance.post('/auth/register', {
                username,
                email,
                password,
            });
            res.data && window.location.replace('/login');
        }catch(err){
            setError(true);
        }
    };


  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input 
                type="test" 
                className="registerInput" 
                placeholder="Enter Your Username" 
                onChange={e=>setUsername(e.target.value)}
            />
            <label>Email</label>
            <input 
                type="email" 
                className="registerInput" 
                placeholder="Enter Your Email"
                onChange={e=>setEmail(e.target.value)} 
            />
            <label>Password</label>
            <input 
                type="password" 
                className="registerInput" 
                placeholder="Enter Your Password"
                onChange={e=>setPassword(e.target.value)} 
            />
            <button className="registerButton" type="submit">Register</button>
            <button className="registerLoginButton"><Link className="link" to="/login">Login</Link></button>
            {error && <span style={{color: "red", marginTop: "10px"}}>Something went wrong</span>}
        </form>
    </div>
);
}