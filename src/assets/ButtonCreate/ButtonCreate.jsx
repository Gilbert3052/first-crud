import React from 'react'
import "./ButtonCreate.css"

const ButtonCreate = ({changeKey}) => {
  return (
    <div className='ButtonCreate'>
        <button onClick={() => changeKey()} className='btn'>Create New User</button>
    </div>
  )
}

export default ButtonCreate