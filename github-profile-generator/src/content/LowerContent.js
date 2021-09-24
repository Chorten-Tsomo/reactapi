import React from 'react';
import './lower.css'

export const LowerContent= ({labelName, lowerValue}) => {
    return (
        <div className="information">
            <p className="label">{labelName}</p>

            <h3 className="value">{lowerValue}</h3>
        </div>
    )
}