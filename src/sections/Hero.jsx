import Buttons from "../component/Buttons";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../component/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1);
  return (
    <>
      <section
        id="home"
      className="w-full flex justify-center xl:flex-row flex-col min-h-screen gap-10 max-container"
      >         
        <div className="relative w-full flex flex-col items-start justify-center xl:w-2/5 max-xl:padding-x pt-28">
          <p className="text-coral-red text-xl font-montserrat mt-10">
            Our Winter Collections
          </p>
          <h1 className="mt-10 font-palanquin text-8xl max-sm:text[72px] max-sm:leading-[82px] font-bold">
            <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
              The New Arrival
            </span>
            <br />
            <span className="text-coral-red mt-3 inline-block">Nike</span>
            <br />
            Shoes
          </h1>
          <p className="font-montserrat text-slate-gray mt-6 mb-14 text-lg leading-8 sm:max-w-sm">
            Discover stylish Nike arrival, quaility
            <br />
            comfort, and innovation for your active life
          </p>
          <Buttons label="Show me" iconURL={arrowRight} />

          <div className="flex justify-starts item-start flex-wrap w-full mt-20 gap-16">
            {statistics.map((stat, index) => (
              <div key={index.label}>
                <p className="text-4xl font-palanquin font-bold ">
                  {stat.value}
                </p>
                
                <p className="text-slate-gray font-montserrat leading-7">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div> 
        {/* img sec */}
         <div
          className="relative flex-1 flex justify-center items-center xl:min-h-screen
         max-xl:py-40 bg-primary bg-hero bg-cover bg-center"
        >
          <img
            src={bigShoeImg}
            alt="shoe collection"
            width={610}
            height={502}
            className="object-contain relative z-10"
          />

          <div className="flex absolute -bottom-[5%] sm:gap-6 gap-4 sm:left-[10%] max-sm:px-6">
            {shoes.map((shoe) => (
              <div key={shoe}>
                <ShoeCard
                  imgURL={shoe}
                  changeBigShoeImg={(shoe) => setbigShoeImg(shoe)}
                  bigShoeImg = {bigShoeImg}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
