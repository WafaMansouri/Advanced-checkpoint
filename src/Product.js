import React from 'react'
import {styles} from './App'
import Proptypes from 'prop-types'
const Product = (props) => {
return (<tr>
    <td style={styles}>{props.elem.name}</td>
    <td style={styles}>{props.elem.price}</td>
    <td style={styles}>{props.elem.category}</td>
</tr>)
}
Product.proptype={
    elem:Proptypes.exact({
        name:Proptypes.string,
        price:Proptypes.number,
        category:Proptypes.string
    })
}
export default Product