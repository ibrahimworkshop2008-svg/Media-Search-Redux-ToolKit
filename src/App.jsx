import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IncreaseByAmount, increment } from './Redux/CounterSlice'

const App = () => {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.count.value)
  const [num, setNum] = useState()
  return 
    <div>

      <h1>Hello {count}</h1>

      <div><button onClick={() => {
        dispatch(increment())
      }}>Increment</button></div>
      <div><button onClick={() => {
        dispatch(decrement())
      }}>Decrement</button></div>
      <div>
        <input type="number" placeholder='Select Number' value={num}
        onChange={(e) => setNum(e.target.value)} 
        />
        <button onClick={() => {
          dispatch(IncreaseByAmount(num))
        }}>Press</button>
        </div>






    </div>
  
}

export default App