import React from 'react'
import {styles} from './App'
import PropTypes from 'prop-types'
const Product = ({elem}) => {
return (<tr>
    <td style={styles}>{elem.name}</td>
    <td style={styles}>{elem.price}</td>
    <td style={styles}>{elem.category}</td>
</tr>)
}
Product.propTypes={elem:PropTypes.exact({
        name:PropTypes.string.isRequired,
        price:PropTypes.number.isRequired,
        category:PropTypes.string.isRequired
    })
}
export default Product