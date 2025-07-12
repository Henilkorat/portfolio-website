import BlogSection from '@/components/Sections/Blog/BlogSection'
import ContactCTA from '@/components/Sections/Contact/ContactCTA'
import HeroSection from '@/components/Sections/Hero/HeroSection'
import HireSection from '@/components/Sections/Hire/HireSection'
import PortfolioSection from '@/components/Sections/Portfolio/PortfilioSection'
import Services from '@/components/Sections/Services/Services'
import React from 'react'

const page = () => {
  return (

    <div className="bg-white text-black">
      <HeroSection />
      <Services />
      <HireSection />
      <PortfolioSection />
      <ContactCTA />
      <BlogSection />

    </div>

  )
}

export default page
