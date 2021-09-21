import CakeCard from "./cakeCard";
import cakeData from "./data"

function CakeContainer(){
    return (
        <>
            {cakeData.map(cake => {
                return <CakeCard key={cake.flavor} flavor={cake.flavor} price={cake.price} size={cake.size}/>
            })}
        </>
    );
}

export default CakeContainer