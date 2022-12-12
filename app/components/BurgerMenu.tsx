import TopMenuElement from "./TopMenuElement";
import { IBurgerMenuProps } from "../../user";
import Image from "next/image";

import iconMenuclose from "../../public/images/icon-menu-close.svg";

const BurgerMenu = ({
  children,
  menuElements,
  open,
  openChangedHandler,
}: IBurgerMenuProps) => {
  const handleButtonClick = () => {
    openChangedHandler(false);
  };

  return (
    <>
      <div className={"md:hidden"}>
        <div
          className={
            "fixed top-0 left-0 h-[100vh] w-full bg-black transition-opacity" +
            ` ${open ? "opacity-50" : "hidden opacity-0"}`
          }
        ></div>
        <div
          className={
            "fixed top-0 left-1/3 z-10 flex h-[100vh] w-full flex-col gap-8 bg-off-white p-8 pt-36 transition-transform" +
            ` ${open ? "translate-x-0" : "translate-x-2/3"}`
          }
        >
          {menuElements.map((t, index) => {
            return (
              <TopMenuElement
                title={t.title}
                key={index}
                className={"text-very-dark-blue"}
              />
            );
          })}
          <Image
            src={iconMenuclose}
            alt={"Close"}
            onClick={handleButtonClick}
            className={"absolute left-2/3 top-0 mt-10 -translate-x-[60px]"}
          />
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
