import  React from 'react';
import logo from '../../img/logo.png'
export const HeaderComponent = () => {

    return (
        <header>
            <div className="logo">
            <img src={ logo } width="150" alt="..." />
            <a href="no-script-url">SpotifyApp</a>
            </div>

            <nav>
            <a href="no-script-url">Inicio</a>
            <a href="no-script-url">Blog</a>
            <a href="no-script-url">Proyectos</a>
            <a href="no-script-url">Contacto</a>
            </nav>
      </header>
    )
}