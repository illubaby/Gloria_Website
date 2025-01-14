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
      <div className="mt-8 space-y-8">
        <section>
          <CountryCard
            title="Đức"
            imageSrc="/assets/labor-direct/germany.jpg"
            imageAlt="Đức"
            description="Chương trình học nghề tại Đức là một cơ hội hấp dẫn với nhiều ngành nghề đa dạng, môi trường làm việc hiện đại, và chế độ đãi ngộ tốt."
            link="/study-abroad/germany"
          />
        </section>
        <section>
          <CountryCard
            title="Hàn Quốc"
            imageSrc="/assets/labor-direct/korea.jpg"
            imageAlt="Hàn Quốc"
            description="Là một trong những nền kinh tế phát triển nhanh nhất Châu Á, Hàn Quốc mang đến môi trường làm việc chuyên nghiệp và nhiều cơ hội nâng cao kỹ năng."
            link="/study-abroad/korea"
          />
        </section>
        <section>
          <CountryCard
            title="Nhật Bản"
            imageSrc="/assets/labor-direct/japan.jpg"
            imageAlt="Nhật Bản"
            description="Với công nghệ tiên tiến và kỷ luật nghiêm ngặt, Nhật Bản giúp bạn rèn luyện tay nghề, trau dồi kiến thức và tích lũy kinh nghiệm quý báu."
            link="/study-abroad/japan"
          />
        </section>
        <section>
          <CountryCard
            title="Đài Loan"
            imageSrc="/assets/labor-direct/taiwan.jpg"
            imageAlt="Đài Loan"
            description="Đài Loan mang đến môi trường làm việc năng động, đa văn hóa và nhiều cơ hội thăng tiến trong lĩnh vực công nghệ, sản xuất."
            link="/labor-direct/taiwan"
          />
        </section>
        <section>
          <CountryCard
            title="Singapore"
            imageSrc="/assets/labor-direct/singapore.jpg"
            imageAlt="Singapore"
            description="Là trung tâm tài chính khu vực, Singapore tạo điều kiện tốt cho người lao động với mức lương hấp dẫn và cơ hội phát triển nghề nghiệp."
            link="/labor-direct/singapore"
          />
        </section>
      </div>
    </div>
  );
}
