"use client";

import menu from "../../public/images/icon-menu.svg";
import Image from "next/image";
import { IBurgerButtonprops } from "../../user";

const BurgerButton = ({ children, openChangedHandler }: IBurgerButtonprops) => {
  const handleButtonClick = () => {
    openChangedHandler(true);
  };

  return (
    <>
      <Image
        src={menu}
        alt={"Menu"}
        onClick={handleButtonClick}
        className={"h-2/3 w-auto self-end md:hidden"}
      />
    </>
  );
};

export default BurgerButton;
