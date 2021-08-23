import React, { useState } from 'react'

import data from './data'
import List from './List';

import './app.css'

function App() {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className=' booklist'>
        {/* <h3>List of {people.length} birthdays </h3> */}
        <List people={people} />

      </section>
      <button onClick={() => setPeople([])}>clear all</button>
    </main>
  )
}

export default App;
