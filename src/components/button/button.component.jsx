import {useContext} from 'react';
import { DisplayContext } from "../../contexts/display.context"


const Button = ({text}) => {
	const { setDisplay, showNums, setShowNums } = useContext(DisplayContext)

  const handleClick = (event) => {
    if(event.target.id.toUpperCase() === 'RESET') {
      setDisplay([])
      setShowNums(false)
    } else if(event.target.id.toUpperCase() === 'SEND'){
      setShowNums(true)
    }
  }

  return (
    <button id={text} className={`${text}-button`} onClick={handleClick}>{text.toUpperCase()}</button>
  )
}

export default Button;
