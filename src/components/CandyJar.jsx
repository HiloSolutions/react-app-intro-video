import React, {useState, useEffect} from 'react'
import './CandyJar.css';

const CandyJar = () => {
  const [count, setCount] = useState(5);
  const [color, setColor] = useState('pink')

  useEffect(() => {
    alert(`Color has been updated to: ${color}`)
  }, [color])

  const eatCandy = () => {
    setCount(prevCount => prevCount - 1);
  }

  const addCandy = () => {
    setCount(prevCount => prevCount + 1);
  }

  const handleColorChange = (e) => {
    setColor(e.target.value)
  }

  return (
    <div className='card'>
      <h2>V3 - React State Management (Candy Jar)</h2>
      <div className="circle-container">
        {
          Array.from({ length: count }, (_, index) => (
            <div key={index} className={`circle ${color}`}></div>
          ))
        }
      </div>
      <h4> Total Candies: {count}</h4>

      <div>
        <button onClick={eatCandy}>Eat Candy</button>
        <button onClick={addCandy}>Add Candy</button>
      </div>

      <div>
        <label htmlFor="colorSelect">Select Color:</label>
        <select id="colorSelect" value={color} onChange={handleColorChange}>
          <option value="pink">Pink</option>
          <option value="green">Green</option>
          <option value="purple">Purple</option>
        </select>
      </div>
    </div>
  )
}

export default CandyJar