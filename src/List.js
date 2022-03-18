import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const List = ({ people }) => {
  // console.log(people);
  return (
    <>
      {people.map((person) => {
        const { id, name, birthday, image, about, nickname } = person;
        return (
          <Card className="text-center bg-dark text-white  " key={id} >
            <Card.Header >{name}</Card.Header>
            <Card.Img
              width={300}
              height={400}
              alt={nickname}
              src={image}
            />
            {/* <Card.Img variant="top" src={image} alt={name} /> */}
            <Card.Body>
              <Card.Title><b style={{ color: '#6495ED' }}>{nickname}</b></Card.Title>
              <Card.Text>
                <i>{birthday}</i>
              </Card.Text>
              <Button as='a' href={about} target="_blank" > <i className="bi bi-facebook"></i></Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default List;
