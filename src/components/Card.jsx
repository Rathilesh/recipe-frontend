/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function CardComponent({data}) {
  return (
    <Card style={{ width: '18rem', margin:'1rem' }}>
    <Card.Img variant="top" src={data.image} />
    <Card.Body>
      <Card.Title>{data?.name}</Card.Title>
      <Card.Text>
       {data?.description}
      </Card.Text>
      <Link to={`/recipe-details/${data?.id}`}>View Details</Link>      
    </Card.Body>
    </Card>
  )
}
