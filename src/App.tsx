import { useState } from 'react'

function App() {
  const [count, setCount] = useState<number>(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
        {count}
      </h1>
      <button onClick={handleClick}>Click me</button>
    </>
  )
}

export default App
