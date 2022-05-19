import { useState } from 'react'
import axios from 'axios';

function App() {

  const [item, setItem] = useState('one')

  const getBye = async() => { 
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then( (response) => {
      const theBye = response.data.msg;
      setItem(theBye)
    })
    .catch( error => console.error(error) )
    //setItem('two')
  }

  return (
    <div>
      <h3>Hi Ned</h3>
      <button onClick={ getBye }>Click me</button>
      <h1 id='h1'>{item}</h1>
    </div>
  );
}

export default App;
