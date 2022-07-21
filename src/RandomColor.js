import React from 'react'
import axios from 'axios'

export default function RandomColor(props) {
    
    const [color, setColor] = React.useState("")

    React.useEffect(() => {
        getColor()
    }, [])
    
    function getColor() {
        axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
            .then(res => setColor(res.data.colors[0].hex))        
    }

    return (
        <>
            <div className="colorbox--container">
                <div className="colorbox" style={{background: `#${color}`}}></div>
                <h3>Hex Code: #{color}</h3>
                <button className="colorbox-button" onClick={getColor}><h3>Refresh Color</h3></button>
            </div>
        </>
    )
}
