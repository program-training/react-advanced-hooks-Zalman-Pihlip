import { useState } from "react";

const useCount = (num:number): [number, () => void] => {
    const [count, setCount] = useState<number>(num)
    const incrementCount = () => setCount(prev => prev + 1)
    return [count, incrementCount]
}

export default useCount