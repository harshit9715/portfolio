import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";
import Image from "next/image";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Kind Words from <span className="text-purple">satisfied clients</span>
      </h1>
      <div className="mt-10 flex flex-col items-center justify-center">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <div className="flex flex-wrap items-center justify-center gap-4 max-lg:mt-10 md:gap-16">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex max-w-32 gap-2 md:max-w-60">
              <Image
                src={img}
                alt={name}
                width={20}
                height={20}
                className="w-5 md:w-10"
              />
              <Image
                src={nameImg}
                alt={name}
                width={80}
                height={80}
                className="w-20 md:w-24"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
