import React from "react";

interface ISideMenuProps {
  className?: string;
  children?: React.ReactNode;
}

interface ISideMenuArticleProps {
  title: string;
  text: string;
  className?: string;
  children?: React.ReactNode;
}

interface IHeroArticleProps {
  title: string;
  text: string;
  className?: string;
  children?: React.ReactNode;
}

interface IFooterProps {
  className?: string;
  children?: React.ReactNode;
}

interface IFooterItemProps {
  index: number;
  title: string;
  text: string;
  img: any;
  className?: string;
  children?: React.ReactNode;
}

interface ITopMenuElementProps {
  title: string;
  className?: string;
  children?: React.ReactNode;
}

interface IWindowStateProps {
  width: number;
  height: number;
}

interface IBurgerMenuProps {
  openChangedHandler: any;
  open: boolean;
  menuElements: ITopMenuElementProps[];
  className?: string;
  children?: React.ReactNode;
}

interface IBurgerButtonprops {
  openChangedHandler: any;
  className?: string;
  children?: React.ReactNode;
}
