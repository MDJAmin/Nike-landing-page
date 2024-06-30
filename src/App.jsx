// import Nav from "./Components/Nav/Nav";
// import Hero from "./Components/Hero/Hero";
// import PopularProducts from "./Components/PopularProducts/PopularProducts";
// import SuperQuality from "./Components/SuperQuality/SuperQuality";
// import Services from "./Components/Services/Services";
// import SpecialOffer from "./Components/SpecialOffer/SpecialOffer";
// import CustomerReviews from "./Components/CustomerReviews/CustomerReviews";
// import Subscribe from "./Components/Subscribe/Subscribe";
// import Footer from "./Components/Footer/Footer";

// export default function App() {
//   return (
//     <main className="relative">
//       <Nav />
//       <section className="xl:padding-1 wide:padding-r padding-b">
//         <Hero />
//       </section>
//       <section className="padding">
//         <PopularProducts />
//       </section>
//       <section className="padding">
//         <SuperQuality />
//       </section>
//       <section className="padding-x py-10">
//         <Services />
//       </section>
//       <section className="padding">
//         <SpecialOffer />
//       </section>
//       <section className="bg-pale-blue padding">
//         <CustomerReviews />
//       </section>
//       <section className="padding-x sm:py-32 py-16 w-full">
//         <Subscribe />
//       </section>
//       <section className="padding bg-black padding-x padding-y pb-8">
//         <Footer />
//       </section>
//     </main>
//   );
// }

import { Nav } from "./components";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";

const App = () => {
  return (
    <main className='relative'>
      <Nav />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='padding'>
        <PopularProducts />
      </section>
      <section className='padding'>
        <SuperQuality />
      </section>
      <section className='padding-x py-10'>
        <Services />
      </section>
      <section className='padding'>
        <SpecialOffer />
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
      <section className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  );
};

export default App;
