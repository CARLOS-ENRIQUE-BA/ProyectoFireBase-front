import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.svg';
import '../assets/style/Login.css';

const Login = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`login-container ${isDarkMode ? 'dark-mode' : ''}`}>
            <header className="header">
                <img src={Logo} alt="Logo" className="logo" />
                <div className="toggle-switch">
                    <label className="switch-label">
                        <input
                            type="checkbox"
                            className="checkbox"
                            checked={isDarkMode}
                            onChange={toggleDarkMode}
                        />
                        <span className="slider"></span>
                    </label>
                </div>
            </header>
            <form className="login-form">
                <div className="titulo-login">Login</div>
                <div className="input-group">
                    <input required type="text" name="firstName" autoComplete="off" className="input" />
                    <label className="user-label">IP: Base de datos</label>
                </div>
                <div className="input-group">
                    <input required type="text" name="lastName" autoComplete="off" className="input" />
                    <label className="user-label">Contraseña</label>
                </div>
                <div className="input-group">
                    <input required type="text" name="email" autoComplete="off" className="input" />
                    <label className="user-label">Confirmación</label>
                </div>
                <Link to="/inicio" className="login-btn">Iniciar</Link>
            </form>
            <footer className='footer'>
                <div className="person1">
                    <div className="name">Carlos Enrique Barriga Aguilar</div>
                    <div className="id">221188</div>
                    <div className="major">Ingeniería en software</div>
                </div>
                <div className="divider"></div>
                <div className="person2">
                    <div className="name">Veronica Velazco Jimenes</div>
                    <div className="id">221224</div>
                    <div className="major">Ingeniería en software</div>
                </div>
            </footer>
        </div>
    );
};

export default Login;
