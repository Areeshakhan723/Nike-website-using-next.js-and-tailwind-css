import Buttons from "../component/Buttons"

const Subscribes = () => {
  return (
    <>
      <section  id="contact-us" 
           className="max-container flex justify-between items-center max-lg:flex-col gap-10">
        <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
          Sign Up For 
          <span className="text-coral-red"> Updates </span>
           & Newsletter
        </h3>
        <div className="lg:max-w-[40%] w-full flex items-center rounded-full max-sm:flex-col p-2.5 gap-5 sm:border sm:border-slate-gray">
          <input type="text" placeholder="subscribe@nike.com"
          className="input"
           />
           <div className="flex max-sm:justify-end items-center max-sm:w-full">
            <Buttons label="Sign up" fullWidth />
            </div>
        </div>
      </section>
    </>
  )
  
}

export default Subscribes;
