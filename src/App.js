import "./App.css";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

function App() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  console.log(rating);
  return (
    <div className="App">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i} className="star">
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              size={100}
              color={ratingValue <= (hover || rating) ? "#FF0000" : "#808080"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
}

export default App;
