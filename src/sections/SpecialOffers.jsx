import Buttons from "../component/Buttons";
import { arrowRight } from "../assets/icons";
import {offer} from "../assets/images";

const SpecialOffers = () => {
  return (
    <>
      <section className="max-container flex justify-between items-center max-xl:flex-col-reverse gap-10">
        <div className="flex-1">
          <img src={offer} alt="Shoe Promotion" width={770} height={667}
          className="object-contain w-full"
          />
        </div>
        <div className="flex flex-1 flex-col">
          <h2 className="p-2 font-palanquin text-4xl font-bold">
            <span className="text-coral-red"> Special </span>
              Offer
          </h2>
          <p className="mt-5 info-text p-4">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
          </p>
          <p className="mt-6 info-text p-4">
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us is
            nothing short of exceptional.
          </p>
          <div className="mt-11 flex flex-wrap gap-4">
            <Buttons label="Shop now" iconURL={arrowRight}/>
            <Buttons
             label="Learn more" 
              backgroundColor="bg-white"
              borderColor="border-slate-gray"
              textColor="text-slate-gray"
             />
          </div>
        </div>
      </section>
    </>
  );
};

export default SpecialOffers;
