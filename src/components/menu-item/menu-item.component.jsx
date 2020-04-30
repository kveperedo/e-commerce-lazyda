import React from 'react'

import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size }) => {
    return (
        <div className={`${size} menu-item`}>
            <div className='bg-image' style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className='content'>
                <p className='title'>{title.toUpperCase()}</p>
                <p className='subtitle'>SHOP NOW</p>
            </div>
        </div>
    )
}

export default MenuItem