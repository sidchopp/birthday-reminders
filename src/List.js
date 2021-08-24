import React from 'react';
import { Card, Button, Figure, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, birthday, image, about } = person;
        return (
          <Card className="text-center  " key={id} >
            <Card.Header className="bg-dark text-white">{person.name}</Card.Header>
            <Card.Img variant="top" src={image} alt={name} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                {birthday}
              </Card.Text>
              <Button as='a' href={about} target="_blank" > <i class="bi bi-facebook"></i></Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default List;
