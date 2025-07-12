'use client';

import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'Fast & SEO-Friendly Pages',
    image: '/img/seo-design.avif', // Replace with actual path
  },
  {
    title: 'Web Design',
    image: '/img/webdesign.avif',
  },
  {
    title: 'Landing Page',
    image: '/img/landing-page.avif',
  },
];

export default function Services() {
  return (
    <section className='bg-black ' id='service'>
    <div className="py-16 px-4 md:px-12 bg-black text-white relative overflow-hidden max-w-[1536px] mx-auto">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          My <span className="text-orange-400">Services</span>
        </h2>
        <p className="text-gray-300 mt-4 max-w-xl mx-auto font-medium">
           Offering clean, modern designs and responsive <br /> web solutions tailored to your goals.       
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} image={service.image} />
        ))}
      </div>

       {/* Dots (Static) */}
      <div className="mt-10  justify-center gap-2 hidden md:flex">
        <span className="h-2 w-6 bg-orange-400 rounded-full"></span>
        <span className="h-2 w-2 bg-gray-500 rounded-full"></span>
        <span className="h-2 w-2 bg-gray-500 rounded-full"></span>
      </div> 
    </div>
    </section>
  );
}
