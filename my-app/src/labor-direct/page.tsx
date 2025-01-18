"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CountryCard } from '../components/CountryCard/CountryCard';

export default function LaborDirectPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
      <h1 className="text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0">
        Thị trường việc làm quốc tế
      </h1>
      
      {/* Updated div: turn into a grid with 3 columns on large screens */}
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <section className="mx-auto">
          <CountryCard
            title="Canada"
            imageSrc="/assets/country/canada.jpg"
            imageAlt="Canada"
            description="Canada mang đến môi trường làm việc đa văn hóa, phúc lợi xã hội tốt và cơ hội phát triển nghề nghiệp lâu dài cho người lao động quốc tế."
            link="/labor-direct/canada"
          />
        </section>
        <section className="mx-auto">
          <CountryCard
            title="Đan Mạch"
            imageSrc="/assets/country/denmark.jpg"
            imageAlt="Đan Mạch"
            description="Đan Mạch là quốc gia lý tưởng với chế độ phúc lợi cao, môi trường làm việc an toàn và các chính sách hỗ trợ người lao động quốc tế."
            link="/labor-direct/denmark"
          />
        </section>
        <section className="mx-auto">
          <CountryCard
            title="Đức"
            imageSrc="/assets/country/germany.jpg"
            imageAlt="Đức"
            description="Với nền kinh tế lớn mạnh, Đức cung cấp nhiều cơ hội việc làm trong các lĩnh vực kỹ thuật, sản xuất và công nghệ cao."
            link="/labor-direct/germany"
          />
        </section>
        <section className="mx-auto">
          <CountryCard
            title="Bulgaria"
            imageSrc="/assets/country/bulgaria.jpg"
            imageAlt="Bulgaria"
            description="Bulgaria đang phát triển mạnh mẽ với các cơ hội việc làm trong ngành sản xuất, nông nghiệp và công nghệ thông tin."
            link="/labor-direct/bulgaria"
          />
        </section>
        <section className="mx-auto">
          <CountryCard
            title="Đài Loan"
            imageSrc="/assets/country/taiwan.jpg"
            imageAlt="Đài Loan"
            description="Đài Loan là một trung tâm công nghệ với nhiều cơ hội nghề nghiệp trong sản xuất và phát triển công nghệ cao."
            link="/labor-direct/taiwan"
          />
        </section>
        <section className="mx-auto">
          <CountryCard
            title="Nhật Bản"
            imageSrc="/assets/country/japan.jpg"
            imageAlt="Nhật Bản"
            description="Nhật Bản có nhu cầu cao trong các ngành như điều dưỡng, xây dựng và sản xuất, với mức lương cạnh tranh và môi trường làm việc chuyên nghiệp."
            link="/labor-direct/japan"
          />
        </section>
        <section className="mx-auto">
          <CountryCard
            title="Hàn Quốc"
            imageSrc="/assets/country/korea.jpg"
            imageAlt="Hàn Quốc"
            description="Hàn Quốc cung cấp các cơ hội việc làm hấp dẫn trong ngành công nghệ, sản xuất và dịch vụ với chế độ đãi ngộ tốt."
            link="/labor-direct/korea"
          />
        </section>
      </div>
    </div>
  );
}
