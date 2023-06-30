
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Counter from '../Counter/Counter'
import { useState } from 'React'

function ItemDetail (prod) {
  const [count, setAddCount] = useState();

  const handleCount = (count) => {
    setAddCount(count);
    console.log("Products to add: " + count);
}

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.img} alt={name}/>
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>${prod.price}</Card.Text>
        <Card.Text>{prod.description}</Card.Text>
       { count  > 0 ? (<Link to="/cart"> finish your </Link>) : <Counter stock={prod.stock} inicial={1} add={handleCount} ></Counter>} 
      </Card.Body>
    </Card>
  );
}

export default ItemDetail;