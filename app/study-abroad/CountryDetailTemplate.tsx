import React from 'react';

interface CountryDetailProps {
  countryName: string;
  introduction: string;
  reasonsToStudy: string;
  scholarshipInfo: string;
  additionalInfo: string;
}

export default function CountryDetailTemplate({
  countryName,
  introduction,
  reasonsToStudy,
  scholarshipInfo,
  additionalInfo
}: CountryDetailProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 space-y-8">
      <h1 className="text-midnightblue text-4xl font-semibold">
        {countryName}
      </h1>
      <section className="bg-white shadow p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Giới thiệu</h2>
        <p>{introduction}</p>
      </section>
      <section className="bg-white shadow p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Tại sao nên học tại {countryName}?</h2>
        <p>{reasonsToStudy}</p>
      </section>
      <section className="bg-white shadow p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Chương trình học bổng</h2>
        <p>{scholarshipInfo}</p>
      </section>
      <section className="bg-white shadow p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Thông tin khác</h2>
        <p>{additionalInfo}</p>
      </section>
    </div>
  );
}