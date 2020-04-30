import React from 'react'

import shop_data from './shoppage.data.js'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

class ShopPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            collections: shop_data
        }
    }

    render() {
        const {collections} = this.state
        return (
            <div className='shop-age'>
                {collections.map(({id, ...otherProps}) => (
                    <CollectionPreview key={id} {...otherProps} />
                ))}
            </div>
        )
    }
}

export default ShopPage