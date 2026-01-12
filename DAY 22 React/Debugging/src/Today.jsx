import { useEffect, useState } from 'react'


function Today() {
    const [count1, setCount1] = useState(0) 
    const [count2, setCount2] = useState(0)
    useEffect(()=>{
      console.log("useEffect called")
      if (count2>10){
        setCount2(0);
      }
    },[count2]
      );
  return (
    <div>
        <h1>The vakue1 is {count1}</h1>
        <h1>The value2 is {count2}</h1>
        <button onClick={() => setCount1(count1 + 1)}> Count1 </button>
        <button onClick={() => setCount2(count2 + 2)}> Count2 </button> 
    </div>
  )
}

export default Today