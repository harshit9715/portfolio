import React from "react";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pb-10 max-md:mb-[100px]" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presencee to next level?
        </h1>
        <p className="mg:mt-10 my-5 text-center text-white-200">
          {
            "Reach out to me today and let's discuss how I can help you achieve your golas"
          }
        </p>
        <a href="mailto:harshit9715@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="mt-16 flex flex-col items-center justify-between md:flex-row">
        <p className="text-sm font-light md:text-base md:font-normal">
          Copyright © 2024 Harshit Gupta
        </p>
        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map((item, index) => (
            <div
              key={item.id}
              className="flex size-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-black-200 opacity-75 saturate-150 backdrop-blur-lg"
            >
              <Image src={item.img} alt={`${item.id}`} width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
