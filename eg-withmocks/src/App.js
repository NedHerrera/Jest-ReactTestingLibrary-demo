import { useState } from 'react'
import axios from 'axios';

function App() {

  const [item, setItem] = useState('one')

  const getBye = async() => { // https://jsonplaceholder.typicode.com/todos/1
    const res = await axios.get('http://localhost:3030/bye')
    .then( (response) => {
      const theBye = response.data.title;
      setItem(theBye)
    })
    .catch( error => console.error(error) )
  }

  return (
    <div>
      <h3>Hi Ned</h3>
      <button onClick={ getBye }>Click me</button>
      <span title='h1'>{item}</span>
    </div>
  );
}

export default App;
