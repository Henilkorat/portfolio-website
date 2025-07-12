import Image from 'next/image'
import Button from '../../ui/Button'

export default function HeroSection() {
  return (
    <section className="px-4 sm:px-6 md:px-10 py-10 md:max-h-screen max-md:h-[calc(100vh-80px)] flex items-center bg-gradient-to-b from-white to-gray-50 rounded-3xl shadow-lg overflow-hidden md:overflow-visible
 ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Left Section */}
        <div className="space-y-5 text-center md:text-left">
          {/* <div className="inline-block border px-4 py-1 rounded-full text-sm">Hello!</div> */}

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            I’m <span className="text-orange-400">Henil</span>,<br />
            Software Developer
          </h1>

          <p className="text-gray-600 text-base font-medium max-w-md mx-auto  md:mx-0 leading-relaxed">
            Crafted a fast, responsive, and scalable web solution — built for modern business needs.
          </p>

          <div className='flex flex-wrap text-lg justify-center md:justify-start gap-4 pt-4 font-semibold'>
            <Button  text="Portfolio" icon className='py-3 font-semibold' href='#portfolio'  />
            <Button text="Resume" secondary className='py-3 font-semibold'  href='/resume.pdf' />
          </div>
        </div>

        {/* Right Section */}
        <div className="relative w-full flex justify-center md:justify-end items-center
        ">
          <div className="relative z-10 w-[240px] sm:w-[280px] md:w-[360px] lg:w-[360px] lg:h-[360px] xl:w-[420px] xl:h-[420px]">
            <Image
              src="/img/developer-avatar.avif"
              alt="Developer Avatar"
              width={420}
              height={420}
              className="rounded-full"
            />
          </div>
          <div className="absolute -bottom-6 right-0 w-64 h-64 bg-orange-200 rounded-full -z-10 hidden md:block"></div>
        </div>
      </div>
    </section>
  )
}
