import {
  Hero,
  PopulerProducts,
  SuperQulity,
  Services,
  SpecialOffers,
  CustomerReviews,
  Subscribes,
  Footer,
} from "./sections";

import Nav from "../src/component/Nav";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      {/* wide:padding-r */}
      <section className="xl:padding-l wide:padding-r padding-b"><Hero /></section>  
      <section className="padding"><PopulerProducts /></section>
      <section className="padding"><SuperQulity /></section>
      <section className="padding-x p-10"><Services /></section>
      <section className="padding"><SpecialOffers /></section>
      <section className="padding bg-pale-blue"><CustomerReviews /></section>
      <section className="padding-x sm:py-32 py-16 w-full"><Subscribes /></section>
      <section className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  );
};

export default App;
