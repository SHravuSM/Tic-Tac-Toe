import React from 'react'

export default function Win({win}) {
    return (
        <div className='flex duration-1000 transition-all ease-in-out x-20 justify-center pt-20 items-start text-yellow-500'>
            <h1 className='text-[80px]'>{win} - Won</h1>
            {/* <button onClick={playAgain}>Play again</button> */}
        </div>
    )
}