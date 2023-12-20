import { useState } from "react"

export default function Counter() {

    const [count, setCounter] = useState(0);

    return(
        <div className='myCounter'>
            <h1>counter: {count}</h1>
            <button onClick={() => setCounter(count + 1)}>Press Here for +</button><br></br>
            <button onClick={() => setCounter(count - 1)}>Press Here for -</button><br></br>
            <button onClick={() => setCounter(0)}>Reset Counter</button>
        </div>
    )
}