import {services} from "../constants";
import ServicesCard from "../component/ServicesCard";

const Services = () => {
  return (
    <section className="max-container flex justify-center items-center flex-wrap gap-9">
      {services.map((services) => (
        <ServicesCard key={services.label} 
        {...services}
        />
      ))}
    </section>
  )
}


export default Services;  

