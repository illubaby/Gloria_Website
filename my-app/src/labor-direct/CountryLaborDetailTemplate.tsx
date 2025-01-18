import React from 'react';

interface CountryLaborDetailProps {
  countryName: string;
  introduction: string;
  laborOpportunities: string;
  workingConditions: string;
  benefits: string;
  additionalInfo: string;
}

export default function CountryLaborDetailTemplate({
  countryName,
  introduction,
  laborOpportunities,
  workingConditions,
  benefits,
  additionalInfo
}: CountryLaborDetailProps) {
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
        <h2 className="text-2xl font-bold mb-2">Cơ hội việc làm tại {countryName}</h2>
        <p>{laborOpportunities}</p>
      </section>
      <section className="bg-white shadow p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Điều kiện làm việc</h2>
        <p>{workingConditions}</p>
      </section>
      <section className="bg-white shadow p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Chế độ đãi ngộ</h2>
        <p>{benefits}</p>
      </section>
      <section className="bg-white shadow p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Thông tin khác</h2>
        <p>{additionalInfo}</p>
      </section>
    </div>
  );
}
