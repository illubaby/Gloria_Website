// filepath: /c:/Users/ADMIN/OneDrive/Documents/GitHub/Gloria_Website/app/labor-direct/germany/page.tsx
"use client"
import Image from 'next/image'
import React from 'react'

export default function GermanyPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
      <h1 className="text-midnightblue text-4xl sm:text-5xl font-semibold mb-4">
        Học nghề Đức
      </h1>
      <Image
        src="/assets/labor-direct/germany.jpg"
        alt="Học nghề Đức"
        width={800}
        height={500}
        className="object-cover rounded-lg mb-4"
      />
      <p>Thông tin về chương trình học nghề Đức...</p>
    </div>
  )
}