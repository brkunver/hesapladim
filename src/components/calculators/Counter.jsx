import { useState } from "react"
import { Button } from "@/components/ui/button"
function Counter() {
  let [count, setCount] = useState(0)
  return (
    <div>
      <h1>count is {count}</h1>
      <Button onClick={() => setCount(count + 1)}>Arttır</Button>
    </div>
  )
}

export default Counter
