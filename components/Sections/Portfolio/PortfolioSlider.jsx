'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const portfolioItems = [
  {
    image: '/img/gym-project.avif', // Put your images here in /public/images
    title: 'Gym Web App',
    link: 'https://gym-web-henilkorats-projects.vercel.app/',
  },
  {
    image: '/img/spotify-project.avif',
    title: 'Spotify Web App',
    link: 'https://spotify-clone-project-iota.vercel.app/',
  },
  {
    image: '/img/x-project.avif',
    title: 'X Web App',
    link: 'https://x-design-henilkorats-projects.vercel.app/',
  },
];

export default function PortfolioSlider() {
  return (
    <section className="px-3 md:px-12 py-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">
          Let's have a look at <br /> my <span className="text-orange-400">Portfolio</span>
        </h2>

      </div>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500, // 1.5 seconds
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            pagination:{ clickable: true }, // Show dots on md and up
          },
          0: {
            slidesPerView: 1,
            pagination: false, // Disable dots below md
          },
        }}
        pagination={{ clickable: true }}

      >
        {portfolioItems.map((item, index) => (
          <SwiperSlide key={index}>
            <a href={item.link} className="block group transition">
              <div className="h-[350px] max-md:h-[350px] max-sm:h-[230px] w-full overflow-hidden rounded-2xl relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-fit absolute top-0 left-0"
                />
              </div>
              <div className="mt-2 text-center text-xl font-bold text-gray-800 ">
                {item.title}
              </div>
            </a>
          </SwiperSlide>

        ))}
      </Swiper>
    </section>
  );
}
