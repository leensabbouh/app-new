import React, { useState } from 'react';
import data from './data';
import List from './list';
function Bir() {const [people,setPeople] = useState(data);
  return(

  

  
<main>
  <section className='container'> 
  <h3>{people.length} birthday</h3>
  <List people={people}/>
  <button onClick={()=> setPeople([])}>clear all</button>
  </section>
</main>
  )
  
}

export default Bir;
