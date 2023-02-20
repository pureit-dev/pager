import { useContext } from "react"
import { DisplayContext } from "../../contexts/display.context"

const Display = ({displayNums, className}) => {
	const { display } = useContext(DisplayContext)
	return (
		<div className={`${className}-container`}>
			{displayNums && <p className={`${className}-text`}>{display}</p>}
		</div>
	)
}

export default Display
