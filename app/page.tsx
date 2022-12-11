import Image from "next/image";

import logo from "../public/images/logo.svg";
import SideMenu from "./components/SideMenu";
import HeroArticle from "./components/HeroArticle";
import Footer from "./components/Footer";
import { ITopMenuElementProps } from "../public/user";
import TopMenuElement from "./components/TopMenuElement";

export default function Home() {
  let heroArticleText =
    "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?";

  let topMenuElements: ITopMenuElementProps[] = [
    { title: "Home" },
    { title: "New" },
    { title: "Popular" },
    { title: "Trending" },
    { title: "Categories" },
  ];

  return (
    <div
      className={
        "m-28 grid grid-cols-3 grid-rows-[auto_1fr_125px] gap-y-8 gap-x-6"
      }
    >
      <div>
        <Image src={logo} alt={"Logo"} />
      </div>
      <div className={"col-span-full col-start-2"}>
        <div className={"flex flex-row justify-end gap-12"}>
          {topMenuElements.map((t) => {
            return (
              <TopMenuElement
                title={t.title}
                key={t.title}
                className={
                  "cur cursor-pointer text-dark-grayish-blue hover:text-soft-red"
                }
              />
            );
          })}
        </div>
      </div>
      <HeroArticle
        title={"The Bright Future of Web 3.0?"}
        text={heroArticleText}
        className={
          "hero-article col-span-2 col-start-1 row-start-2 grid grid-cols-2 grid-rows-[3fr_2fr] gap-8"
        }
      />
      <SideMenu
        className={
          "side-menu col-start-3 row-start-2 flex flex-col gap-0 bg-very-dark-blue py-8 px-6"
        }
      />
      <Footer className={"col-span-full row-start-3 flex flex-row gap-6 "} />
    </div>
  );
}
