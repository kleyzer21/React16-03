import { movies } from "../Gallery/data"
import { useState } from 'react';


export function Gallery() {
    const [id, setId] = useState(0);

    function nextClick() {
        setId(id + 1);
    }
    function previousClick() {
        setId(id - 1);
    }
      
      return (
        <>
        <button className="buttonNext" onClick={nextClick}>
          Next
        </button>  
        <button className="buttonPrevious" onClick={previousClick}>
          Previous
        </button>  
        
        <img className="img" src={movies[id].images.poster} alt="" />
        <p>
          {/* {movies.description} */}
        </p>
      </>
    );
  }
  
