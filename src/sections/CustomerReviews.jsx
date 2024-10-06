import {reviews} from "../constants"
import ReviewsCard from "../component/ReviewsCard"

const CustomerReviews = () => {
  return (
    <>
      <section className="max-container">
        <h3 className="font-palanquin text-center text-4xl font-bold">
          What Our
          <span className="text-coral-red"> Customers </span>
          Say?
        </h3>
        <p className="info-text m-auto mt-4 text-center max-w-lg">Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.</p>
        <div className="mt-20 flex justify-evenly items-center max-lg:flex-col gap-14">
          {reviews.map((reviews, index) => (
            <ReviewsCard
            ReviewsCar
            key={index}
            imgURL={reviews.imgURL}
            customerName={reviews.customerName}
            rating={reviews.rating}
            feedback={reviews.feedback}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default CustomerReviews;
