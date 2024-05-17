import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../redux/counterSlice'

function Counter() {
    const [amount,setAmount]=useState(0)
    const dispatch = useDispatch()
    const { count } = useSelector(state => state.counterReducer)

    const handleIncrementAmount=()=>{
        if(amount){
            dispatch(incrementByAmount(parseInt(amount)))

        }else{
            alert("Please enter a amount to proceed!!")
        }

    }
    return (
        <>
            <h2>Counter App</h2>
            <div className='border rounded mt-5 p-5' style={{ width: '800px' }}>
                <h1 style={{ fontSize: '80px' }} className='text-center mb-5'>{count}</h1>
                <div className="d-flex justify-content-around w-100">
                    <button onClick={() => dispatch(decrement())} className='btn btn-warning'>DECREMENT</button>
                    <button onClick={() => dispatch(reset())} className='btn btn-danger'>RESET</button>
                    <button onClick={() => dispatch(increment())} className='btn btn-success'>INCREMENT</button>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-5 w-100">

                    <input onChange={e=>setAmount(e.target.value)} type="text" className='form-control w-100' placeholder='Incremented Counter Amount' />

                    <button onClick={handleIncrementAmount} className='btn btn-primary ms-2'>INCREMENT BY AMOUNT</button>
                </div>

            </div>


        </>
    )
}

export default Counter