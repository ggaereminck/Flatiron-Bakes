import { useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import CakeContainer from "./CakeContainer"


function App() {
  const [ isVisible, setIsVisible ] = useState(true)

  return (
    <>
      <Header/>
      {isVisible ? <SearchBar/> : null}
      <button onClick={() => setIsVisible(!isVisible)}>{isVisible ? 'Hide' : 'Show'}</button>
      <CakeContainer/>
    </>
  );
}

export default App;
