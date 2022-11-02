import { useState } from "react"

const Counter = () => {

    const [count, setCount] = useState(0)
    let increaseCount = () => {
        setCount((count + 1))
    }
    
    return <button onClick={increaseCount}>+</button>
}

export default Counter