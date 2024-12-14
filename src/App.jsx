import { useState } from "react";
import "./App.css";
import Rate from "./Rate";
import ThankYou from "./ThankYou";

export default function App() {
  const [ratingScore, setRatingScore] = useState();
  const [isSubmit, setIsSubmit] = useState(false);
  console.log("Rating Score is " + ratingScore);
  console.log(isSubmit);
  function handleSubmit() {
    setIsSubmit((prev) => !prev);
  }
  function handleRatingScore(ratingScore) {
    setRatingScore(ratingScore);
  }
  return (
    <main className='main bg-neutral-700 ff-primary'>
      {!isSubmit && (
        <Rate
          onRatingScore={handleRatingScore}
          onIsSubmit={handleSubmit}
          ratingScore={ratingScore}
        />
      )}
      {isSubmit && <ThankYou ratingScore={ratingScore}></ThankYou>}
    </main>
  );
}
