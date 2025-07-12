'use client';

import Image from 'next/image';
import HireStats from './HireStats';
import Link from 'next/link';
export default function HireSection() {
  return (
    <section className="bg-[#f8f9fb] py-16 px-6 md:px-12 rounded-3xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        
        {/* Left Image (hidden on small screens) */}
        <div className="hidden md:block">
          <Image
            src="/img/hire-me.avif" // Place your image in /public/images/
            alt="Hire Me"
            width={500}
            height={500}
            className="mx-auto"
          />
        </div>

        {/* Right Text */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            Why <span className="text-orange-500">Hire me?</span>
          </h2>
          <p className="text-gray-600 mt-8 max-w-md mx-auto md:mx-0 leading-relaxed font-semibold">
            I build visually appealing, high-performing websites tailored to client goals and user needs.
          </p>

          {/* Stats */}
          <div className="flex justify-center md:justify-start gap-10 mt-8 font-medium">
            <HireStats value="5+" label="	Tech Stacks Used" />
            <HireStats value="100%" label="	Mobile Responsiveness" />
          </div>

          {/* Button */}
          <button><Link href='#contact' className="mt-8 inline-block px-6 py-3 border bg-orange-400  text-white font-semibold rounded-full hover:bg-orange-500 transition">
            Hire me
          </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
