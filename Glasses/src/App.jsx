import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import GlassesTry from './GlassesTry/GlassesTry'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlassesTry/>
    </>
  )
}

export default App
