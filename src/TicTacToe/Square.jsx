import React from 'react'

export default function Square({ state, onclick }) {
  return (
    <div onClick={onclick} className='border-2 p-3 rounded-md border-red-500 flex items-center justify-center text-black font-mono font-extrabold w-28 h-28 text-center'>

      <h1 className='text-3xl'>{state}</h1>

    </div>
  )
}
