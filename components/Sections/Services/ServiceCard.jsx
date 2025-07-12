'use client';

import { ArrowUpRight } from 'lucide-react';

export default function ServiceCard({ title, image }) {
  return (
    <div className="group bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-4 w-full max-w-sm transition hover:scale-105 duration-300">
      <h3 className="text-white text-xl font-semibold mb-4 text-center">{title}</h3>
      <div className="relative rounded-xl overflow-hidden">
        <img src={image} alt={title} className="w-full h-auto object-cover" />
        <div className="absolute bottom-4 right-4 bg-black text-white p-2 rounded-full transition-colors duration-300 group-hover:bg-orange-400">
          <ArrowUpRight size={20} />
        </div>
      </div>
    </div>
  );
}
