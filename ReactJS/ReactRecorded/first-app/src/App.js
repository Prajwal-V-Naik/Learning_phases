import React from "react"
import './style.css'
import Button from "./Button"
import Welcome from "./Welcome"

const App = () => {
    return(
            <>
                <h1 style={{textAlign:"center",}}>HelloWorld!</h1>
                <Button title="App Store"/>
                <Button title="Play Store" />
                <Welcome name="Connections"/>
                {/* <button className='button'>App Store</button>
                <button className='button'>Play Store</button> */}
            </>
    )
}

export default App;