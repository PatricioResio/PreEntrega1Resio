import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function item() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://newsport.vtexassets.com/arquivos/ids/14939312/DV3770400-A.jpg?v=638055801836300000" />
      <Card.Body>
        <Card.Title>Producto ejemplo</Card.Title>
        <Card.Text>
          descripción ejemplo del producto
        </Card.Text>
        <Button variant="dark">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default item;