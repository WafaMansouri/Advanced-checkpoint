import React from 'react';
import './App.css';
import Product from './Product'
const products=[{name:"Dress", price:100, category:"Clothes"},
{name:"Television", price:1500, category:"Electronics"},
{name:"Skirt", price:70, category:"clothes"},
{name:"Dishwasher", price:2000, category:"Electronics"},
{name:"Laptop", price:2500, category:"Electronics"}]
const styles = {
  border:'3px solid',
  borderColor: "#00f",
  minWidth:'200px'
};
function ProductTable(props){
  return(
    <table style={{textAlign:'center', fontSize:35,}}>
      <thead>
      <tr>
        <th style={styles}>Name</th>
        <th style={styles}>Price</th>
        <th style={styles}>Category</th>
      </tr>
      </thead>
      <tbody>
      {props.table.map((el,index) => <Product elem={el} key={index}/>)}
      </tbody>
    </table>
  );
}
export {products};
export {styles};
export default ProductTable;