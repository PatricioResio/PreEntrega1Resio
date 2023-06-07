import  { useState } from 'react'

const Counter = ({stock, inicial}) => {
  const [counter, setCounter] = useState(inicial);

/*     useEffect(() => {
      first
    
      return () => {
        second
      }
    }, [third])
     */

  const aumentarContador = () =>{
    if (counter < stock) {
        setCounter(counter + 1);
    }
  }
  
  const restarContador = () =>{
    if (counter > inicial ) {
        setCounter(counter - 1);
    }
  }

    return (
    <div>
        <h2>Counter</h2>
        <button onClick={aumentarContador}> + </button>
        <strong> {counter} </strong>
        <button onClick={restarContador}> - </button>
        <button>Agregar al carrito</button>
    </div>
  )
}

export default Counter