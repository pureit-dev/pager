import { useContext } from "react"
import { DisplayContext } from "../../contexts/display.context"
import "./button.styles.css"
import pager from "../../assets/pager.wav"

const Button = ({ text }) => {
	const { setDisplay, showNums, setShowNums } = useContext(DisplayContext)
	const audio = new Audio(pager)

	const handleClick = (event) => {
		if (event.target.id.toUpperCase() === "RESET") {
			setDisplay([])
			setShowNums(false)
		} else if (event.target.id.toUpperCase() === "SEND") {
			setShowNums(true)
			audio.play()
		}
	}

	return (
		<button
			id={text}
			className={`${text.toLowerCase()}-button`}
			onClick={handleClick}
		>
			{text.toUpperCase()}
		</button>
	)
}

export default Button
