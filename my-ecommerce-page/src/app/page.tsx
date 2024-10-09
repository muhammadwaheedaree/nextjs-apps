import { FC } from 'react';
import Image from 'next/image';

const Home: FC = () => {
  return (
    <div className="bg-white">
      {/* Top Announcement Bar */}
      <div className="bg-black text-center py-2 text-sm text-gray-600">
        Sign up and get 20% off your first order.{' '}
        <a href="#" className="text-white font-semibold underline">Sign Up Now</a>
      </div>

      {/* Header */}
      <header className="border-b py-4 px-4 lg:px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold">SHOP.CO</h1>
        <nav className="hidden md:flex space-x-8 text-gray-700">
          <a href="#" className="hover:text-black">Shop</a>
          <a href="#" className="hover:text-black">On Sale</a>
          <a href="#" className="hover:text-black">New Arrivals</a>
          <a href="#" className="hover:text-black">Brands</a>
        </nav>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            className="border px-4 py-2 rounded-md text-sm hidden md:block"
            placeholder="Search for products..."
          />
          <button className="text-gray-600">🛒</button>
          <button className="text-gray-600">👤</button>
        </div>
        {/* Mobile Menu Icon */}
        <button className="md:hidden text-gray-600">☰</button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-24 flex flex-col lg:flex-row items-center justify-between">
        <div className="text-center lg:text-left lg:w-1/2 space-y-6">
          <h2 className="text-4xl lg:text-6xl font-extrabold leading-tight text-black">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h2>
          <p className="text-gray-600 max-w-lg">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of style.
          </p>
          <a href="#" className="bg-black text-white px-8 py-3 rounded-full inline-block mt-6">
            Shop Now
          </a>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <Image src="/hero.png" alt="Fashion Models" className="w-full object-cover" layout="responsive"
  width={800}       
  height={600}        
 />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 lg:px-8 flex justify-between text-center">
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-black">200+</h3>
            <p className="text-gray-500">International Brands</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-black">2,000+</h3>
            <p className="text-gray-500">High-Quality Products</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-black">30,000+</h3>
            <p className="text-gray-500">Happy Customers</p>
          </div>
        </div>
      </section>

    
{/* Brands Section */}
<section className="py-12 bg-black">
  <div className="container mx-auto px-4 lg:px-8 flex flex-wrap justify-center gap-12 text-white">
    <ul className="flex flex-wrap gap-8 justify-center items-center">
      <li className="text-3xl md:text-4xl lg:text-5xl">VERSACE</li>
      <li className="text-2xl md:text-3xl lg:text-4xl">ZARA</li>
      <li className="text-2xl md:text-3xl lg:text-4xl">GUCCI</li>
      <li className="font-bold text-2xl md:text-3xl lg:text-4xl">PRADA</li>
      <li className="text-2xl md:text-3xl lg:text-4xl">Calvin Klein</li>
    </ul>
  </div>
</section>

    </div>
  );
};

export default Home;
