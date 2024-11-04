import React, { useState } from 'react'
import Square from './Square'

export default function Board() {

    const [state, setState] = useState(Array(9).fill('!'))
    const [isX, setIsX] = useState(true)

    function handleClick(ind) {
        const stateCopy = [...state]
        stateCopy[ind] = isX ? 'X' : 'O'
        setState(stateCopy)
        setIsX(!isX)
    }
    function checkWinner() {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let posbl of winnerLogic) {
            const [a, b, c] = posbl
            if (state[a] != '!' && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }
        return false
    }

    const winner = checkWinner()

function playAgain(){
    setState(Array(9).fill('!'))
}

    return (
        <div className='flex items-center flex-col w-screen h-dvh'>
            {winner ? <>
            <div className='w-screen h-screen flex duration-1000 transition-all ease-in-out justify-center pt-20 items-start text-red-500 font-mono font-semibold'>
                <h1 className='text-9xl'>{winner} Won</h1>
                <button onClick={playAgain}>Play again</button>
                </div></> :
                (<>
                    <div className='flex items-center'>
                        <Square onclick={() => {
                            handleClick(0)
                        }} state={state[0]} />
                        <Square onclick={() => {
                            handleClick(1)
                        }} state={state[1]} />
                        <Square onclick={() => {
                            handleClick(2)
                        }} state={state[2]} />
                    </div>

                    <div className='flex items-center'>
                        <Square onclick={() => {
                            handleClick(3)
                        }} state={state[3]} />
                        <Square onclick={() => {
                            handleClick(4)
                        }} state={state[4]} />
                        <Square onclick={() => {
                            handleClick(5)
                        }} state={state[5]} />
                    </div>

                    <div className='flex items-center'>
                        <Square onclick={() => {
                            handleClick(6)
                        }} state={state[6]} />
                        <Square onclick={() => {
                            handleClick(7)
                        }} state={state[7]} />
                        <Square onclick={() => {
                            handleClick(8)
                        }} state={state[8]} />
                    </div>
                </>)
            }
        </div>
    )
}
