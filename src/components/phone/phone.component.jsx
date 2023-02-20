import {useReducer, useState} from 'react';
import Num from '../number/number.component';
import Display from '../display/display.component';
import Button from '../button/button.component';
import './phone.styles.css'

const Phone = () => {
  const numsToDisplay = [1,2,3,4,5,6,7,8,9,'*',0,'#']
  const [displayNums, setDisplayNums] = useState(false)
  return (
    <article className="phone-container">
      <h1 className='phone-title'>Phone</h1>
      <Display className="phone-display" displayNums="true"/>
      <section className="num-container">
        {numsToDisplay.map((num) => (
          <Num num={num} />
        ))}
      </section>
      <Button text="Reset" />
      <Button text="Send" />
      
    </article>
  )
}

export default Phone;
