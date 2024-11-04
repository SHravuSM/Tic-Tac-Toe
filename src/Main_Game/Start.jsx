import React, { useState } from 'react'
import Square from './Square';
import Win from './Win';

export default function Start() {
    const [state, setState] = useState(Array(9).fill(''))
    const [isX, setisX] = useState(false)

    function handleClick(index) {
        const clicks = [...state]
        clicks[index] = isX ? 'X' : 'O'
        setState(clicks)
        setisX(!isX)
    }
    console.log(state);

    function gameLogic() {
        const winn = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [2, 4, 6],
            [2, 5, 8],
            [1, 4, 7],
            [0, 3, 6],
            [3, 4, 6],
        ]

        for (const ele of winn) {
            const [a, b, c] = ele
            if (state[a] != '' && state[a] == state[b] && state[a] == state[c]) {
                return state[a]
            }
        }
        return false
    }

    const winner = gameLogic()
    console.log(winner);

    return (
        <>

            {winner ? <><h1 className='text-center text-[80px] text-slate-600 overline decoration-green-600'>Tic-Tac-Toe</h1> <Win win={winner} /></> : <div className='flex flex-col items-center'>
                <h1 className='text-center text-[80px] text-slate-600 overline decoration-yellow-500'>Tic-Tac-Toe</h1>
                <div className='flex w-2/6 justify-around items-center'>
                    <Square state={state[0]} onclick={() => handleClick(0)} />
                    <Square state={state[1]} onclick={() => handleClick(1)} />
                    <Square state={state[2]} onclick={() => handleClick(2)} />
                </div>

                <div className='flex w-2/6 justify-around items-center'>
                    <Square state={state[3]} onclick={() => handleClick(3)} />
                    <Square state={state[4]} onclick={() => handleClick(4)} />
                    <Square state={state[5]} onclick={() => handleClick(5)} />
                </div>

                <div className='flex w-2/6 justify-around items-center'>
                    <Square state={state[6]} onclick={() => handleClick(6)} />
                    <Square state={state[7]} onclick={() => handleClick(7)} />
                    <Square state={state[8]} onclick={() => handleClick(8)} />
                </div>

            </div>}
        </>
    )
}
