import {star} from "../assets/icons"

const ProductCard = ({imgURL, name, price}) => {
  return (
    <>
        <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <img src={imgURL} alt={name} 
            className="w-[280px] h-[280px]"/>
            
            <div className="mt-8 flex justify-start gap-2.5">
                <img src={star} alt="Rating" width={24} height={24}/>
                <p className="mt-2 font-montserrat text-slate-gray text-lg leading-normal">(4.5)</p>
            </div>
            <h2 className="font-semibold text-lg leading-normal font-palanquin">{name}</h2>
            <p className="mt-2 font-semibold text-lg leading-normal font-montserrat text-coral-red">{price}</p>
        </div>
    </>
  )
}

export default ProductCard;