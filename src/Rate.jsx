import starIcon from "./assets/icon-star.svg";

export default function Rate({ onRatingScore, onIsSubmit, ratingScore }) {
  // console.log(onRatingScore);
  return (
    <section
      className='main-container
     bg-neutral-600'
    >
      <div className='star'>
        <img src={starIcon} alt='Star with yellow background' />
      </div>
      <div className='feedback-description'>
        <h3 className='text-neutral-100 fw-bold fs-large'>How did we do?</h3>
        <p className='text-neutral-200 fw-regular fs-small'>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className='feedback-score'>
        <button
          onClick={() => onRatingScore(1)}
          className='bg-neutral-500 text-neutral-200'
        >
          1
        </button>
        <button
          onClick={() => onRatingScore(2)}
          className='bg-neutral-500 text-neutral-200'
        >
          2
        </button>
        <button
          onClick={() => onRatingScore(3)}
          className='bg-neutral-500 text-neutral-200'
        >
          3
        </button>
        <button
          onClick={() => onRatingScore(4)}
          className='bg-neutral-500 text-neutral-200'
        >
          4
        </button>
        <button
          onClick={() => onRatingScore(5)}
          className='bg-neutral-500 text-neutral-200'
        >
          5
        </button>
      </div>
      <button
        disabled={!ratingScore}
        onClick={onIsSubmit}
        className='btn | bg-accent-400 text-neutral-700 fw-bold'
      >
        Submit
      </button>
    </section>
  );
}
