import React from 'react'

export default function Square({state,onclick}) {
  return (
    <div onClick={onclick} className='bg-slate-500 text-red-500 rounded-md border-2 border-black size-40 p-1 m-2 active:border-yellow-500 active:border-[4px] flex items-center justify-center'>
      <p className='text-[50px] text-white'>{state}</p>
    </div>
  )
}
