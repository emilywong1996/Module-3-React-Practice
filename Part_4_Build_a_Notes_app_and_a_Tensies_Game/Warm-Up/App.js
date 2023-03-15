import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    const [darkMode, setDarkmMode] = React.useState(true)

    function toggleDarkMode() {
        setDarkmMode(prevMode => !prevMode)
    }

    return (
        <div className="container">
            <Navbar
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}/>
            <Main darkMode={darkMode}/>
        </div>
    )
}