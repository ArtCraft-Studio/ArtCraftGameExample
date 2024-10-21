import React from 'react';
import './HealthBar.css';

function HealthBar({ value, maxValue }) {
    const percentage = (value / maxValue) * 100;
    const healthClass = percentage < 25 ? 'danger' : 'safe';

    return (
        <div className="progress-bar">
            <div className={`progress-fill ${healthClass}`} style={{ width: `${percentage}%` }}></div>
        </div>
    );
}

export default HealthBar;
