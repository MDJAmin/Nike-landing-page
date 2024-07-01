import React from "react";
import "../PopularProductCard/PopularProductCard.css";
import { star } from "../../assets/icons";
import Atropos from "atropos/react";

export default function PopularProductCard({
  imgURL,
  name,
  price,
  starNumber,
}) {
  const myAtropos = Atropos({
    el: ".my-atropos",
    // rest of parameters
  });
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <Atropos className="my-atropos transition-all" shadow={false}>
        <img src={imgURL} alt={name} className="w-[282px] h-[282px]" />
      </Atropos>
      <div className="mt-8 flex justify-start gap-2.5">
        <img
          src={star}
          alt="rating icon"
          width={25}
          height={0.1}
          className="relative mt-[2.7px]"
        />
        <p className=" text-xl leading-normal text-gray-800">
          {starNumber}
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-blue-500 text-2xl leading-normal">
        {price}
      </p>
    </div>
  );
}
