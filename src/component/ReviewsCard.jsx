import { star } from "../assets/icons";

const ReviewsCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex justify-center items-center flex-col mt-16">
        <img src={imgURL} alt="customer" 
        width={120}
        height={120}
        className="rounded-full object-contain"
        />
        <p className="mt-6 info-text text-center max-w-sm">{feedback}</p>
        <div className="mt-4 flex justify-center items-center gap-2.5">
            <img src={star} alt="rating"
            width={24}
            height={24}
            className="object-contain m-0"
            />
            <p className="font-montserrat text-lg text-slate-gray">{rating}</p>
        </div>
         <h3 className="mt-3 font-palanquin font-bold text-3xl text-center">{customerName}</h3>
    </div>
  )
}

export default ReviewsCard;