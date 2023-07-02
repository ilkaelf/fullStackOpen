import { useState } from 'react'

const Button = ({ text, handleClick }) => (
  <button onClick = {handleClick}>
    {text}
  </button>
)

const StatisticLine = ({ text, value, ending}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value} {ending}</td>
    </tr>
  )

}

const Statistics = ({good, neutral, bad}) =>  { 
  if (good > 0 | neutral > 0 | bad > 0) {
  return (
    <div>
      <h1>statistics</h1>
      
      <table>
        <tbody>
          <StatisticLine text="good" value = {good}/>
          <StatisticLine text="neutral" value = {neutral}/>
          <StatisticLine text="bad" value = {bad}/>
          <StatisticLine text="all" value = {good + neutral + bad}/>
          <StatisticLine text="average" value = {((good * 1) + (neutral * 0) + (bad * -1))/(good + neutral + bad)}/>
          <StatisticLine text="positive" value = {(good / (good + neutral + bad)) * 100} ending="%"/>
        </tbody>
      </table>
    </div>
  
)
  }
  return (
    <div>
      <h1>statistics</h1>
      <p>No feedback given</p>
    </div>
  )
}



const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={() => setGood(good + 1)} />
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => setBad(bad + 1)} />

      <Statistics good = {good} neutral = {neutral} bad = {bad} />

      

      
    </div>
  )
}

export default App