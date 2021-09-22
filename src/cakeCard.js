import { useState } from "react"

function CakeCard({flavor, price, size='cup cake'}){
    const [selected, setSelected] = useState(null);
    function handleClick() {
        if (selected === null) {
            setSelected({border: '5px solid black'})
        } else {
            setSelected(null)
        }
    }
    return(
    <div style={selected}>
        <h1>Flavor: {flavor}</h1>
        <p>Price: {price}</p>
        <p>Size: {size}</p>
        <button onClick={handleClick}>Select</button>
    </div>
    )
}


export default CakeCard