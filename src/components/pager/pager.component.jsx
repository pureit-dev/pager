import {useContext} from 'react';
import Display from '../display/display.component';
import { DisplayContext } from "../../contexts/display.context"
import './pager.styles.css'

const Pager = () => {
  const { showNums } = useContext(DisplayContext)
  return (
    <article className='pager-container'>
      <h1 className='pager-title'>Pager</h1>
      <Display displayNums={showNums} className="pager-display"/>
    </article>
  )
}

export default Pager;
