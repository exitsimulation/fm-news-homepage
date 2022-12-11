import { IHeroArticleProps } from "../../public/user";
import Image from "next/image";
import imgWeb3Desktop from "../../public/images/image-web-3-desktop.jpg";

const HeroArticle = ({
  title,
  text,
  className,
  children,
}: IHeroArticleProps) => {
  return (
    <div className={className}>
      <div className={"col-span-full"}>
        <Image src={imgWeb3Desktop} alt={"Web3 Desktop"} />
      </div>
      <div className={"text-6xl font-extrabold"}>
        The Bright Future of Web 3.0?
      </div>
      <div className={"flex flex-col gap-12 "}>
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
