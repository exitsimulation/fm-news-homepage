/**
 * TODO: Find better solution for handling state
 */
"use client";

import Image from "next/image";

import logo from "../public/images/logo.svg";

import SideMenu from "./components/SideMenu";
import HeroArticle from "./components/HeroArticle";
import Footer from "./components/Footer";
import { ITopMenuElementProps } from "../user";
import TopMenuElement from "./components/TopMenuElement";
import BurgerMenu from "./components/BurgerMenu";
import BurgerButton from "./components/BurgerButton";
import { useState } from "react";

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

  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={
          "m-4 flex flex-col gap-y-8 md:m-28 md:grid md:grid-cols-3 md:grid-rows-[auto_1fr_125px] md:gap-y-8 md:gap-x-6"
        }
      >
        <div
          className={
            "sticky top-0 flex h-[80px] w-full flex-row justify-between bg-off-white py-6 md:static md:h-[40px] md:justify-start md:py-0"
          }
        >
          <Image src={logo} alt={"Logo"} className={"h-full w-auto"} />
          <BurgerButton openChangedHandler={setOpen} />
        </div>
        <div
          className={"hidden self-end md:col-span-full md:col-start-2 md:block"}
        >
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
            "hero-article flex flex-col gap-4 md:col-span-2 md:col-start-1 md:row-start-2 md:grid md:grid-cols-2 md:grid-rows-[3fr_2fr] md:gap-8"
          }
        />
        <SideMenu
          className={
            "side-menu flex flex-col gap-0 bg-very-dark-blue py-8 px-6 md:col-start-3 md:row-start-2"
          }
        />
        <Footer
          className={
            "flex flex-col gap-6 md:col-span-full md:row-start-3 md:flex-row "
          }
        />
      </div>
      <BurgerMenu
        menuElements={topMenuElements}
        open={open}
        openChangedHandler={setOpen}
      />
    </>
  );
}
