import React from 'react';
import { Card, Button, Container, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data'


const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, birthday, image } = person;
        return (
          <Card className="text-center" key={id} >
            <Card.Header>{person.name}</Card.Header>

            <Image variant="top" src={image} alt={name} />

            {/* <Card.Img variant="top" src={image} alt={name} /> */}
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                {birthday}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default List;
