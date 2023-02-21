import { useContext } from "react"
import { DisplayContext } from "../../contexts/display.context"
import "./number.styles.css"
import wav0 from "../../assets/0.wav"
import wav1 from "../../assets/1.wav"
import wav2 from "../../assets/2.wav"
import wav3 from "../../assets/3.wav"
import wav4 from "../../assets/4.wav"
import wav5 from "../../assets/5.wav"
import wav6 from "../../assets/6.wav"
import wav7 from "../../assets/7.wav"
import wav8 from "../../assets/8.wav"
import wav9 from "../../assets/9.wav"

const wavFiles = [wav0, wav1, wav2, wav3, wav4, wav5, wav6, wav7, wav8, wav9]

const Num = ({ num }) => {
	const { display, setDisplay, showNums } = useContext(DisplayContext)

	const handleClick = (event) => {
		if (display.length < 11) {
			const nextNumber = [...display, event.target.id]
			setDisplay(nextNumber)
			const audio = new Audio(wavFiles[event.target.id])
			audio.play()
		}
	}

	return (
		<button
			key={num}
			id={num}
			className="num-button"
			onClick={handleClick}
			disabled={showNums}
		>
			{num}
		</button>
	)
}

export default Num
