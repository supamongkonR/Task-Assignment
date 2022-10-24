import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './CSS/CardSlide.css'
const CardItem = ({furniture}) => {
    return ( 
    <div className='container'>
            {furniture.map((furniture, i) => (
                <div key={furniture.id}>
                    <Card style={{ width: '18rem'}}>
                        <Card.Img variant="top" src={furniture.img} />
                        <Card.Body>
                            <Card.Title>{furniture.name}</Card.Title>
                            <Card.Text>{furniture.price}
                            </Card.Text>
                            <Button variant="primary">Buy Now</Button>
                        </Card.Body>
                    </Card>
                </div>
            ))}      
    </div>
    );
}
 
export default CardItem;

