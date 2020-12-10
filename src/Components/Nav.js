import React from 'react'

export default function Nav({toggleMenu}) {
    return (
        <nav>
            <span className="brand"><img src="./assets/millionaire-logo-dark-orange.png" width="150" height="50" alt="logo" /></span>
            <button className="toggle" onClick={() => toggleMenu()}>
                <span className="material-icons">menu
                </span>
            </button>
            
        </nav>
    )
}
