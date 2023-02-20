import { useContext } from "react"
import { DisplayContext } from "../../contexts/display.context"
import "./number.styles.css"

const Num = ({ num }) => {
	const { display, setDisplay } = useContext(DisplayContext)

	const handleClick = (event) => {
		const nextNumber = [...display, event.target.id]
		setDisplay(nextNumber)
	}

	return (
		
			<button
				key={num}
				id={num}
				className="num-button"
				onClick={handleClick}
			>
				{num}
			</button>
		
	)
}

export default Num
