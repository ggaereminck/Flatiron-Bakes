function CakeCard({flavor, price, size='cup cake'}){
    return(
    <>
        <h1>Flavor: {flavor}</h1>
        <p>Price: {price}</p>
        <p>Size: {size}</p>
    </>
    )
}


export default CakeCard