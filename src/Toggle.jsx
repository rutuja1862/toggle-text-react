import React, { useState } from 'react'

function Toggle() {

    const [show,setShow] = useState(true);

  return (
    <div>

    <button onClick={() => setShow(!show)}>Toggle Me</button>

    {show && <h2>Hello, I'm learning React</h2>}
    </div>
  )
}

export default Toggle
