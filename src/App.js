import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

import data from './data'
import List from './List';

import './app.css'

function App() {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className=' card-main'>
        {/* <h3>List of {people.length} birthdays </h3> */}
        <List people={people} />

      </section>
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg" onClick={() => setPeople([])}>clear all</Button>
      </div>
    </main>
  )
}

export default App;
