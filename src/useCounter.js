import { useState } from 'react'

export const useCounter = (initalVal = 0) => {
    const [counter, setCounter] = useState(initalVal)

    const increase = () => {
      setCounter((count) => count + 1);
    }

    const decrease = () => {
      setCounter((count) => count - 1);
    }

    const restart = () => {
      setCounter((count) => count = 0);
    }
  return {counter, increase, decrease, restart}
}
