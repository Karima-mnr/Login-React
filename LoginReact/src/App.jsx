import { useState } from 'react'


import  Login  from './LoginSignUp/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Login />
      </div>
    </>
  )
}

export default App