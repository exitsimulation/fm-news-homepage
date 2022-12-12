// prettier-ignore
"use client"

import { IHeroArticleProps } from "../../user";
import Image from "next/image";
import imgWeb3Desktop from "../../public/images/image-web-3-desktop.jpg";
import imgWeb3Mobile from "../../public/images/image-web-3-mobile.jpg";
import useWindowSize from "./useWindowSize";

const HeroArticle = ({
  title,
  text,
  className,
  children,
}: IHeroArticleProps) => {
  let size = useWindowSize();

  return (
    <div className={className}>
      <div className={"md:col-span-full"}>
        <Image
          src={size.width > 375 ? imgWeb3Desktop : imgWeb3Mobile}
          alt={"Web3 Desktop"}
        />
      </div>
      <div className={"text-5xl font-extrabold md:text-6xl"}>
        The Bright Future of Web 3.0?
      </div>
      <div className={"flex flex-col gap-4 md:gap-10 "}>
        <div>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </div>
        <div>
          <button
            className={
              "bg-soft-red py-3 px-8 uppercase tracking-widest text-off-white hover:bg-very-dark-blue"
            }
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroArticle;
