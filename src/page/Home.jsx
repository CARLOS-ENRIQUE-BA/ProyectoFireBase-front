import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.svg';
import '../assets/style/Inicio.css';

const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(true); // Cambiado a true para iniciar en modo oscuro

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
            <div className='container-main'>
                <form className="home-form">
                    <div className="titulo">Creación de una base de datos en firebase</div>
                    <div className="input-group">
                        <input required type="text" name="firstName" autoComplete="off" className="input" />
                        <label className="user-label">Crear base de datos</label>
                    </div>
                    <div className="input-group">
                        <input required type="text" name="lastName" autoComplete="off" className="input" />
                        <label className="user-label">Usar la base de datos</label>
                    </div>
                    <div className="input-group">
                        <input required type="text" name="email" autoComplete="off" className="input" />
                        <label className="user-label">Crear las tablas</label>
                    </div>
                    <div className="input-group">
                        <input required type="text" name="email" autoComplete="off" className="input" />
                        <label className="user-label">Añadir entradas</label>
                    </div>
                    <div className="input-group">
                        <input required type="text" name="email" autoComplete="off" className="input" />
                        <label className="user-label">Modificar o eliminar datos</label>
                    </div>
                    <button className="home-btn">
                        <div className="svg-wrapper-1">
                            <div className="svg-wrapper">
                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                                </svg>
                            </div>
                        </div>
                        <span>Lanzar base de datos</span>
                    </button>
                </form>
                <form className="home-form">
                    <div className="titulo">Resultado de los analizadores</div>
                    <div className="input-group-2">
                        <label>Analizador léxico</label>
                        <textarea required type="text" name="firstName" autoComplete="off" className="input" />
                    </div>
                    <div className="input-group-2">
                        <label>Analizador sintáctico</label>
                        <textarea required type="text" name="lastName" autoComplete="off" className="input" />
                    </div>
                    <div className="input-group-2">
                        <label>Analizador semántico</label>
                        <textarea required type="text" name="email" autoComplete="off" className="input" />
                    </div>
                </form>
            </div>
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

export default Home;
