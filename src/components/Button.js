import React from 'react';
import './Button.css';

function Button({ label, onClick, variant = 'primary', disabled = false }) {
    return (
        <button
            className={`btn ${variant} ${disabled ? 'disabled' : ''}`}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
}

export default Button;
