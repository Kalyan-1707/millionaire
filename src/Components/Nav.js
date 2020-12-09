import React from 'react'

export default function Nav({end}) {
    return (
        <nav>
            <span className="brand">Millionaire</span>
            {end && <button>End</button>}
        </nav>
    )
}
