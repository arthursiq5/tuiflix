import React from 'react';

// eslint-disable-next-line react/prop-types
export default function FormField({ label, type, name, value, onChange }) {
    return (
        <div>
            <label>
                {label}
                :
                <input
                    type={type}
                    value={value}
                    name={name}
                    onChange={onChange}
                />
            </label>
        </div>
    );
}
