import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

function item({ prod }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.img} />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>{prod.category}</Card.Text>
        <Link to={`/item/${prod.id}`}>ver detalles</Link>
      </Card.Body>
    </Card>
  );
}

export default item;