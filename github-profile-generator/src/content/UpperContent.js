import React from 'react';
import './upper.css';

export const UpperContent = ({labelName, upperCount}) => {

    return (
        <div className="positon">
            <p className="numbers">{upperCount}</p>

            <div className="dis">
                <p>{labelName}</p>
            </div>
        </div>
    )
}
