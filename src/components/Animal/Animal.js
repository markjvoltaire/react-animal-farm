import React from 'react'
import './Animal.css';

export default function Animal({name, says, top, left, type}) {
    return (
        <div className="animal" style={{ top, left }}>
            <img alt={name} src={`${process.env.PUBLIC_URL}/animals/${type}.svg`} />
            <span class="name">{name}</span>
            <span>{says}</span>
        </div>
    )
}
