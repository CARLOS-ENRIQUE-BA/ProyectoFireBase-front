import React, { useState, useEffect } from 'react';
import Logo from '../assets/img/logo.svg';
import '../assets/style/Inicio.css';

const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [crearBase, setCrearBase] = useState('');
    const [usarBase, setUsarBase] = useState('');
    const [crearTablas, setCrearTablas] = useState('');
    const [lexicoResultado, setLexicoResultado] = useState('');
    const [sintacticoResultado, setSintacticoResultado] = useState('');
    const [semanticoResultado, setSemanticoResultado] = useState('');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkMode(savedTheme === 'dark-mode');
        }
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const comando = `
            ${crearBase ? `CREATE DATABASE ${crearBase};` : ''}
            ${usarBase ? `USE DATABASE ${usarBase};` : ''}
            ${crearTablas ? `CREATE TABLE ${crearTablas};` : ''}
        `.trim();

        try {
            const response = await fetch('http://127.0.0.1:5000/procesar_comando', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ comando })
            });
            const data = await response.json();
            if (response.ok) {
                setLexicoResultado(JSON.stringify(data.lexico, null, 2));
                setSintacticoResultado(data.sintactico);
                setSemanticoResultado(data.semantico);
            } else {
                setLexicoResultado(data.error);
                setSintacticoResultado(data.error);
                setSemanticoResultado(data.error);
            }
        } catch (error) {
            console.error('Error al ejecutar el comando:', error);
            setLexicoResultado('Error al conectar con el servidor.');
            setSintacticoResultado('Error al conectar con el servidor.');
            setSemanticoResultado('Error al conectar con el servidor.');
        }
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
            <div className="container-main">
                <form className="home-form" onSubmit={handleFormSubmit}>
                    <div className="titulo">Creación de una base de datos en Firebase</div>
                    <div className="input-group">
                        <input
                            type="text"
                            value={crearBase}
                            onChange={(e) => setCrearBase(e.target.value)}
                            className="input"
                            autoComplete="off"
                        />
                        <label className="user-label">Crear base de datos</label>
                    </div>
                    <div className="input-group">
                        <input
                            type="text"
                            value={usarBase}
                            onChange={(e) => setUsarBase(e.target.value)}
                            className="input"
                            autoComplete="off"
                        />
                        <label className="user-label">Crear base de datos</label>
                    </div>
                    <div className="input-group">
                        <textarea
                            value={crearTablas}
                            onChange={(e) => setCrearTablas(e.target.value)}
                            className="input"
                            autoComplete="off"
                        />
                        <label className="user-label">Crear base de datos</label>
                    </div>
                    <button type="submit" className="home-btn">
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
                        <textarea
                            readOnly
                            value={lexicoResultado}
                            className="input"
                        />
                    </div>
                    <div className="input-group-2">
                        <label>Analizador sintáctico</label>
                        <textarea
                            readOnly
                            value={sintacticoResultado}
                            className="input"
                        />
                    </div>
                    <div className="input-group-2">
                        <label>Analizador semántico</label>
                        <textarea
                            readOnly
                            value={semanticoResultado}
                            className="input"
                        />
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
