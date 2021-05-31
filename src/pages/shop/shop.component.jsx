import React from 'react'
import PreviewCollection from '../../components/preview-collection/preview-collection.component.jsx'
import SHOP_DATA from './shop.data.js'

class ShopPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state
        return (
            <div className='shop-page'>
                {
                    collections.map(({ id, ...otherColProps }) => (
                        <PreviewCollection key={id}{...otherColProps} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage