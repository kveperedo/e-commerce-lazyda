import React from 'react'
import { withRouter } from 'react-router-dom'

import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
    return (
        <div
            className={`${size} menu-item`}
            onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className='bg-image' style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className='content'>
                <p className='title'>{title.toUpperCase()}</p>
                <p className='subtitle'>SHOP NOW</p>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)