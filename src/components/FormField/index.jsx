import React from 'react';

// eslint-disable-next-line react/prop-types
export default function FormField({ label, type, name, value, onChange }) {
    const fieldId = `id_${name}`;

    return (
        <div>
            <label htmlFor={fieldId}>
                {label}
                :
                <input
                    id={fieldId}
                    type={type}
                    value={value}
                    name={name}
                    onChange={onChange}
                />
            </label>
        </div>
    );
}
