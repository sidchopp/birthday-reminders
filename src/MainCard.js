import React, { useState } from 'react'
//import { Button } from 'react-bootstrap';

// Components
import data from './data'
import List from './List';

// CSS
import './maincard.css'

function MainCard() {
  const [people, setPeople] = useState(data)
  // console.log(people);
  // for toggle 
  // const handleClick = () => {
  //   if (people === data) {
  //     setPeople([])
  //   } else {
  //     setPeople(data)
  //   }
  // }
  return (
    <main>
      <section className=' card-main'>
        <List people={people} />
      </section>
      <div className="d-grid gap-2">
        {/* <Button variant="primary" size="lg" onClick={handleClick}>Click me!</Button> */}
      </div>
    </main>
  )
}

export default MainCard;