import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, birthday, image, about, nickname } = person;
        return (
          <Card className="text-center bg-dark text-white  " key={id} >
            <Card.Header >{person.name}</Card.Header>
            <Card.Img variant="top" src={image} alt={name} />
            <Card.Body>
              <Card.Title><b style={{ color: '#6495ED' }}>{nickname}</b></Card.Title>
              <Card.Text>
                <i>{birthday}</i>
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
