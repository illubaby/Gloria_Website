import Image from 'next/image';
import Link from 'next/link';

interface CountryCardProps {
  title: string;
  imageSrc: string;
  description: string;
  link: string;
  imageAlt?: string;
}

export const CountryCard = ({ title, imageSrc, description, link, imageAlt }: CountryCardProps) => {
  return (
    <Link href={link} passHref>
      <div className="group cursor-pointer max-w-md rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg transform transition-transform duration-300 hover:scale-105">
        <div className="relative aspect-w-4 aspect-h-3 overflow-hidden rounded-t-2xl">
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-6">
            <h2 className="text-lg font-semibold text-white">{title}</h2>
          </div>
        </div>
        <div className="p-6 bg-white rounded-b-2xl">
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </Link>
  );
};
