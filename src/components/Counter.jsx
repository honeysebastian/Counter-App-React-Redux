import React from 'react'

function Counter() {
    return (
        <>
            <h2>Counter App</h2>
            <div className='border rounded mt-5 p-5' style={{width:'800px'}}>
                <h1 style={{fontSize:'80px'}} className='text-center mb-5'>0</h1>
                <div className="d-flex justify-content-around w-100">
                    <button className='btn btn-warning'>DECREMENT</button>
                    <button className='btn btn-danger'>RESET</button>
                    <button className='btn btn-success'>INCREMENT</button>
                </div>
                <div className="d-flex justify-content-between mt-5 w-100">
                    <form className='me-5'>
                           <input type="text" className='form-control' placeholder='Incremented counter amount' />
                    </form>
                    <button className='btn btn-primary'>INCREMENT BY AMOUNT</button>
                </div>

            </div>


        </>
    )
}

export default Counter