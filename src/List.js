import React from 'react';
import { Card, Button, Figure, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data'


const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, birthday, image, about } = person;
        return (
          <Card className="text-center" key={id} >
            <Card.Header>{person.name}</Card.Header>
            <Figure>
              <Figure.Image
                width={1500}
                height={800}
                src={image} alt={name}
              /></Figure>
            {/* <Image variant="top" src={image} alt={name} /> */}

            {/* <Card.Img variant="top" src={image} alt={name} /> */}
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                {birthday}
              </Card.Text>
              <Button variant="primary" as='a' href={about} target="_blank" >About Me</Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default List;
