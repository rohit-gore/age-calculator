import { useState } from 'react'
import moment from 'moment'

const App = () => {
  const [show, setShow] = useState(false)
  const [date, setDate] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    setShow(true)
    
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',gap:'20px' }}>
        <h1 style={{margin:'0'}}>Age Calculator</h1>
        <h3 style={{margin:'0'}}>Enter your date of birth</h3>
        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '300px', gap: '20px' }} onSubmit={handleSubmit}>
          <input onChange={(e) => { setDate(e.target.value); setShow(false) }} style={{ width: '100%', padding: '10px',  }} required type="date" value={date} />
          <button style={{ width: '150px',fontSize:'16px', padding: '10px', backgroundColor: '#009BFF', color: 'white', outline: "none", border: 'none', borderRadius: '5px',cursor:'pointer' }} type='submit'>Calculate Age</button>
        </form>
        {show && <h2 style={{margin:'0'}}>You are {moment(date).from().substring(0, 8)} old</h2>}
      </div>
    </div>
  )
}

export default App