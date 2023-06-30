import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncmock.js'
import{ useParams } from 'react-router-dom'


const ItemListContainer = () => {
const [products, setProducts] = useState([]);
const { idCategory } = useParams();

useEffect(() => {
    const funcionProducts = idCategory ? getProductsByCategory : getProducts;

    funcionProducts(idCategory)
        .then(res => setProducts(res))
        .catch(error => console.log(error))
}, [idCategory])


  return (
    <>
    <ItemList products={products} />
    </>
  )
}

export default ItemListContainer