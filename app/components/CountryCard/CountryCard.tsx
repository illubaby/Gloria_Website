import Image from 'next/image';
import Link from 'next/link';

interface CountryCardProps {
  title: string;
  imageSrc: string;
  description: string;
  link: string; // Add link prop for navigation
  imageAlt?: string;
}

export const CountryCard = ({ title, imageSrc, description, link, imageAlt }: CountryCardProps) => {
  return (
    <Link href={link} passHref>
      <div className="group rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer max-w-md">
        {/* Image Section */}
        <div className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-t-2xl h-50">
          <Image
              src={imageSrc}
              alt={imageAlt || title}
              width={500} // Reduced width
              height={300} // Reduced height
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-6">
            <h2 className="text-lg font-semibold text-white">{title}</h2>
          </div>
        </div>

        {/* Description Section */}
        <div className="p-5 bg-white rounded-b-2xl">
          <p className="mt-4 text-gray-700">{description}</p>
        </div>
      </div>
    </Link>
  );
};
