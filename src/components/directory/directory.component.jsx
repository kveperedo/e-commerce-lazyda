import React from 'react'

import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss'

class Directory extends React.Component {
    constructor() {
        super()

        this.state = {
            sections: [{
                title: 'hats',
                imageUrl: 'https://images.unsplash.com/photo-1523380744952-b7e00e6e2ffa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                id: 1,
                size: 'small',
            }, {
                title: 'jackets',
                imageUrl: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80',
                id: 2,
                size: 'small',
            }, {
                title: 'shoes',
                imageUrl: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
                id: 3,
                size: 'small',
            }, {
                title: 'womens',
                imageUrl: 'https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80',
                id: 4,
                size: 'large',
            }, {
                title: 'mens',
                imageUrl: 'https://images.unsplash.com/photo-1442328166075-47fe7153c128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                id: 5,
                size: 'large',
            }]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ title, id, imageUrl, size, type }) => {
                            return (<MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />)
                    })
                }
            </div>
        )
    }
}

export default Directory