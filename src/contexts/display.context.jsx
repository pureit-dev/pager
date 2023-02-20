import { createContext, useState } from "react";

export const DisplayContext = createContext({
    display: null,
    setCurrentDisplay: () => null,
    showNums: null,
    setShowNums: () => null,
})

export const DisplayProvider = ({children}) => {
    const [display, setDisplay] = useState([])
    const [showNums, setShowNums] = useState(false)

    const value = { display, setDisplay,showNums, setShowNums }

    return (
        <DisplayContext.Provider value={value}>
            {children}
        </DisplayContext.Provider>
    )
}