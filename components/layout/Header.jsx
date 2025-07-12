

'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Service', href: '#service' },
  { name: 'Blog', href: '#blog' },
  { name: 'Project', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const pathname = usePathname()

  return (

    <nav className="w-full flex justify-center mt-4 px-2 sm:px-4 md:px-6 ">
      {/* Desktop Navbar */}
      <div className="hidden md:flex   bg-gray-950 text-white px-4 py-2 rounded-full gap-4 md:gap-10 lg:gap-16 mx-auto items-center shadow-md w-full max-w-screen-xl justify-between font-semibold">
        {/* First half of navItems */}
        <div className="flex gap-4 md:gap-6">
          {navItems.slice(0, 3).map((item) => (
            <NavLink key={item.href} item={item} pathname={pathname} />
          ))}
        </div>

        {/* Center "HK" logo */}
        <div className="relative group">
          <div className="min-w-10 min-h-10 w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
            HK
          </div>
          {/* Tooltip only on hover & below md */}
          <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-[#151515] text-white px-3 py-1 rounded-lg shadow-lg whitespace-nowrap 
                  opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 -translate-x-2 transition-all duration-300
                   items-center gap-2 hidden md:flex">

            <div>
              <p className="text-xs text-gray-300 leading-re">Made by</p>
              <p className="text-sm font-semibold">Henil Korat</p>
            </div>
          </div>
        </div>

        {/* Second half of navItems */}
        <div className="flex  gap-4 md:gap-6">
          {navItems.slice(3).map((item) => (
            <NavLink key={item.href} item={item} pathname={pathname} />
          ))}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden w-full justify-between items-center bg-[#151515] text-white px-4 py-3 rounded-full shadow-md">
        {/* Left: HK with hover effect below md */}
        <div className="relative group">
          <Link href='/' className="min-w-10 min-h-10 w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center font-bold text-lg">
            HK
          </Link>

          {/* Tooltip only on hover & below md */}
          <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-[#151515] text-white px-3 py-1 rounded-lg shadow-lg whitespace-nowrap 
                  opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 -translate-x-2 transition-all duration-300
                  flex items-center gap-2 md:hidden">

            <div>
              <p className="text-xs text-gray-300 leading-re">Made by</p>
              <p className="text-sm font-semibold">Henil Korat</p>
            </div>
          </div>
        </div>


        {/* Right: Contact Button */}
        <Link
          href="#contact"
          className={clsx(
            'px-4 py-2 rounded-full font-semibold text-white transition-all duration-200 bg-orange-400 shrink-0'
          )}
        >
          Contact
        </Link>
      </div>
    </nav>

  )
}

function NavLink({ item, pathname }) {
  const isActive = pathname === item.href

  return (
    <Link
      href={item.href}
      className={clsx(
        'px-4 py-2 rounded-full transition-all duration-200',
        isActive ? 'bg-orange-400 text-white' : 'hover:bg-[#404040] text-white'
      )}
    >
      {item.name}
    </Link>
  )
}
