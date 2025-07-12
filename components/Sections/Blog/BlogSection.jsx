'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    image: '/img/blog/blog1.avif', // replace with your path
    category: 'UI/ UX Design',
    author: 'Henil Korat',
    date: '10 Nov, 2023',
    title: 'Design Unraveled: Behind the Scenes of UI/UX Magic',
  },
  {
    id: 2,
    image: '/img/blog/blog2.avif',
    category: 'App Design',
    author: 'Henil Korat',
    date: '09 Oct, 2023',
    title: 'Sugee: Loan Management System for Rural Sector.',
  },
  {
    id: 3,
    image: '/img/blog/blog3.avif',
    category: 'App Design',
    author: 'Henil Korat',
    date: '13 Aug, 2023',
    title: 'Cinetrade: Innovative way to invest in Digital Media',
  },
]

export default function BlogSection() {
  return (
    <section id='blog' className="py-12 sm:py-16 lg:py-20 px-6   sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug">
              From my <br className="sm:hidden" /> blog post
            </h2>
          </div>
          <Link
            href="/"
            className="bg-orange-400 hover:bg-orange-500 text-white font-semibold text-sm px-6 py-3 rounded-full transition"
          >
            See All
          </Link>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl shadow-sm overflow-hidden transition hover:scale-105 duration-300 group">
              <div className="relative ">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="w-full h-60 object-fill rounded-2xl"
                />
                <div className="absolute bottom-4 right-4 bg-[#1c2434] rounded-full p-3 group-hover:bg-orange-400 transition-colors duration-300">
                  <ArrowUpRight className="text-white w-5 h-5" />
                </div>
              </div>

              <div className="p-4 space-y-2">
                {/* Meta */}
                <div className="flex items-center gap-2 text-xs">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>

                <div className="flex items-center text-xs text-gray-500 gap-2 mt-2">
                  <span className="text-orange-500">●</span>
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-gray-800 font-semibold text-sm sm:text-base">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
