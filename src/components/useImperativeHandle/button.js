import React, { forwardRef ,useImperativeHandle , useState } from 'react'

// forwardref are use for provied the ref parameter to components

const Button = forwardRef((props,ref) => {
    const [toggle , settoggle] = useState(false)

    useImperativeHandle(ref,() => ({
        altertoggle() {
            settoggle(!toggle)
        }
      })
    )
  return ( 
    <div>

        <button onClick={() => {
                settoggle(!toggle)
            }
        }>
            child button
        </button>
        {toggle && <span>toggle</span>}

    </div>
  )
})

export default Button