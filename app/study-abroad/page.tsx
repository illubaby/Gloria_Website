"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CountryCard } from '../components/CountryCard/CountryCard';

export default function StudyAbroad() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
      <h1 className="text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0">
        Các chương trình du học nổi bật
      </h1>
      
      {/* Updated div: turn into a grid with 3 columns on large screens */}
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <section className="mx-auto">
          <CountryCard
            title="Hàn Quốc"
            imageSrc="/assets/country/korea.jpg"
            imageAlt="Hàn Quốc"
            description="Hàn Quốc nổi tiếng với nền giáo dục chất lượng cao, môi trường học tập hiện đại, cùng nhiều học bổng hấp dẫn dành cho sinh viên quốc tế."
            link="/study-abroad/korea"
          />
        </section>
        <section className="mx-auto">
          <CountryCard
            title="Úc"
            imageSrc="/assets/country/australia.jpg"
            imageAlt="Úc"
            description="Úc mang đến cơ hội học tập tại các trường đại học hàng đầu thế giới, môi trường sống lý tưởng và cơ hội làm việc sau khi tốt nghiệp."
            link="/study-abroad/australia"
          />
        </section>
        <section className="mx-auto">
          <CountryCard
            title="Đài Loan"
            imageSrc="/assets/country/taiwan.jpg"
            imageAlt="Đài Loan"
            description="Đài Loan là điểm đến hấp dẫn cho các chương trình học tập, với chi phí hợp lý, công nghệ phát triển, và nền giáo dục tiên tiến."
            link="/study-abroad/taiwan"
          />
        </section>
        <section className="mx-auto">
          <CountryCard
            title="Đan Mạch"
            imageSrc="/assets/country/denmark.jpg"
            imageAlt="Đan Mạch"
            description="Đan Mạch cung cấp nền giáo dục miễn phí hoặc chi phí thấp cho sinh viên quốc tế, cùng với môi trường sống chất lượng và an toàn."
            link="/study-abroad/denmark"
          />
        </section>
        <section className="mx-auto">
          <CountryCard
            title="Phần Lan"
            imageSrc="/assets/country/finland.jpg"
            imageAlt="Phần Lan"
            description="Phần Lan là quốc gia nổi tiếng với hệ thống giáo dục tiên tiến, môi trường thân thiện và cơ hội học tập nghiên cứu sáng tạo."
            link="/study-abroad/finland"
          />
        </section>
      </div>
    </div>
  );
}
