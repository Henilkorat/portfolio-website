import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function Button({ text, icon = false, secondary = false, className = '', href }) {
  const baseClass = `px-6 py-2 rounded-full flex items-center gap-2 transition-all shadow-md ${className} ${
    secondary
      ? 'bg-gray-100 text-black hover:bg-gray-200'
      : 'bg-orange-400 text-white hover:bg-orange-500'
  }`

  if (href) {
    return (
      <Link href={href}  className={baseClass}>
        {text}
        {icon && <ArrowUpRight size={20} />}
      </Link>
    )
  }

  return (
    <button className={baseClass}>
      {text}
      {icon && <ArrowUpRight size={20} />}
    </button>
  )
}
