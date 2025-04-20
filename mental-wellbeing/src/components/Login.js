import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Login.css'; 


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // 👈 Ajout ici

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);

        // 👉 Redirige après soumission
        navigate('/acceuil');
    };

    return (
        <div className="login-container">
            
            <form onSubmit={handleSubmit} className="login-form">
                <h3>Login</h3>
                <h5>Don't have an account? <Link to="/Sign">Sign up</Link></h5>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="input-field"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="input-field"
                    />
                </div>
                <button type="submit" className="submit-button">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
