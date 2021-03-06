import React from 'react'
import PropTypes from 'prop-types'

const Multipliers = ({ dynamic_id }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
            <defs>
                <linearGradient id={dynamic_id} x1="0%" x2="100%" y1="100%" y2="0%">
                    <stop offset="0%" stopColor="#FF444F" />
                    <stop offset="100%" stopColor="#FF6444" />
                </linearGradient>
            </defs>
            <path
                fill={`url(#${dynamic_id})`}
                d="M159 64c3.314 0 6 2.686 6 6v36c0 3.314-2.686 6-6 6h-36c-3.314 0-6-2.686-6-6V70c0-3.314 2.686-6 6-6h36zm0 3h-36c-1.582 0-2.877 1.224-2.992 2.776L120 70v36c0 1.582 1.224 2.877 2.776 2.992L123 109h36c1.582 0 2.877-1.224 2.992-2.776L162 106V70c0-1.582-1.224-2.877-2.776-2.992L159 67zm-29.61 9.39c.521-.52 1.365-.52 1.886 0L141 86.115l9.724-9.723c.52-.521 1.365-.521 1.885 0 .481.48.518 1.236.111 1.76l-.11.125L142.885 88l9.723 9.724.111.125c.407.524.37 1.28-.11 1.76-.521.521-1.365.521-1.886 0L141 89.886l-9.724 9.723c-.52.521-1.365.521-1.885 0-.481-.48-.518-1.236-.111-1.76l.11-.125L139.115 88l-9.723-9.724-.111-.125c-.407-.524-.37-1.28.11-1.76z"
                transform="translate(-117 -64)"
            />
        </svg>
    )
}
Multipliers.propTypes = {
    dynamic_id: PropTypes.string,
}

export default Multipliers
