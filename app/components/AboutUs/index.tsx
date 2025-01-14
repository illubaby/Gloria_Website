"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const AboutUs = () => {
  const images = [
    "/assets/activity/pic1.jpg",
    "/assets/activity/pic2.jpg",
    "/assets/activity/pic3.jpg"
  ]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div id="about-us" className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
      <h1 className="text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0">
        Về chúng tôi...
      </h1>
      <div className="flex flex-col lg:flex-row items-center lg:items-start mt-8 h-96">
        <div className="lg:w-2/5">
          <p className="text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0">
            <strong>TRUNG TÂM ĐÀO TẠO, DU HỌC VÀ CUNG ỨNG NHÂN LỰC QUỐC TẾ GLORIA</strong> là đơn vị chuyên cung cấp dịch vụ tư vấn du học và xuất khẩu lao động tại Quảng Bình, đặc biệt là thị trường du học Hàn Quốc và xuất khẩu lao động Châu Âu. Với nhiều năm kinh nghiệm trong lĩnh vực này, Gloria tự hào đã giúp hàng trăm học sinh, sinh viên và người lao động Việt Nam thực hiện ước mơ học tập và làm việc ở nước ngoài. Lợi ích của học sinh và người lao động luôn được đặt lên hàng đầu, với phương châm <strong>CHẤT LƯỢNG, UY TÍN VÀ NHIỆT TÌNH</strong> chúng tôi đã tạo nên thương hiệu riêng của <strong>GLORIA</strong>.
          </p>
        </div>
        <div className="lg:w-3/5 mt-8 lg:mt-0 lg:ml-16 w-full h-80 relative">
          <Image
            src={images[currentIndex]}
            alt="Hoạt động Gloria"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default AboutUs