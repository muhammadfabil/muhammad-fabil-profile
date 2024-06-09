import { FaLinkedin } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] md:mb-5 pb-10" id="contact">
      {/* background grid */}
   

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
        I will not stop to&nbsp; 
        <span className="text-cyan-500">improving&nbsp;</span>
        my programming skills and seek new knowledge to improve my capabilities
        </h1>
        <h2 className="text-white-200 md:mt-10 my-5 text-center text-xl">
          Reach me out and let&apos;s grow together
        </h2>
        <a href="https://www.linkedin.com/in/muhammad-fabil-69a3a11aa/" target="blank">
          <MagicButton
            title="Let's Connected"
            icon={<FaLinkedin />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Muhammad Fabil
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
            key={info.id}
            href={info.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <img src={info.img} alt="icons" width={20} height={20} />
          </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
