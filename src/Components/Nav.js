import React from 'react'

export default function Nav({toggleMenu}) {
    return (
        <nav>
            <span className="brand">Millionaire</span>
            <button className="toggle" onClick={() => toggleMenu()}>
                <span className="material-icons">menu
                </span>
            </button>
            
        </nav>
    )
}
