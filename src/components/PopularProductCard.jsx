import React from "react";
import Atropos from 'atropos';
export default function PopularProductCard({ imgURL, name, price }) {
  const myAtropos = Atropos({
    el: '.my-atropos',
    // rest of parameters
  });
  return( 
  <div className="flex flex-1 flex-col w-full max-sm:w-full">
<img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
  </div>);
}
