import thankYouImage from "./assets/illustration-thank-you.svg";
export default function ThankYou({ ratingScore }) {
  console.log(ratingScore);
  return (
    <section className='main-thankyou-container bg-neutral-600'>
      <div className='thank-you-image'>
        <img src={thankYouImage} alt='thank you' />
      </div>
      <div className='thank-you-description'>
        <p className='rating fw-regular fs-small text-accent-400 bg-neutral-500'>
          You selected {ratingScore} out of 5
        </p>
        <h3 className='fw-bold fs-large text-neutral-100'>Thank you!</h3>
        <p className='fw-regular fs-small text-neutral-200'>
          We appreciate you taking the time to give a rating. if you ever need
          more support, don&apos;t hesitate to get in touch
        </p>
      </div>
    </section>
  );
}
