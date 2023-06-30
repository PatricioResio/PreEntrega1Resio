import  { useState, useEffect } from 'react'

const Counter = ({stock, inicial, add}) => {
  const [counter, setCounter] = useState(inicial);

  useEffect(()=>{

  },[counter])

  const plusCount = () =>{
    if (counter < stock) {
        setCounter(counter + 1);
    }
  }
  
  const restCount = () =>{
    if (counter > inicial ) {
        setCounter(counter - 1);
    }
  }

    return (
    <div>
        <button onClick={plusCount}> + </button>
        <strong> {counter} </strong>
        <button onClick={restCount}> - </button>
        <button>Add to Cart</button>
    </div>
  )
}

export default Counter