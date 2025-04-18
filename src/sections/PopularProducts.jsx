import React from "react";
import { products } from "../constants";
import { PopularProductCard } from "../components";

export default function PopularProducts() {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-Poppins font-bold">
          Our <span className="text-blue-500">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-gray-500">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value.
        </p>
      </div>
      <div className="mt-16 ms-7 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 font-Poppins ">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
}
