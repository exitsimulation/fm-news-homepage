import { IFooterItemProps, IFooterProps } from "../../public/user";
import FooterItem from "./FooterItem";

import imgRetroPc from "../../public/images/image-retro-pcs.jpg";
import imgTopLaptops from "../../public/images/image-top-laptops.jpg";
import imgGamingGrowth from "../../public/images/image-gaming-growth.jpg";

const Footer = ({ className, children }: IFooterProps) => {
  let footerItems: IFooterItemProps[] = [
    {
      index: -1,
      title: "Reviving Retro PCs",
      text: "What happens when old PCs are given modern upgrades?",
      img: imgRetroPc,
    },
    {
      index: -1,
      title: "Top 10 Laptops of 2022",
      text: "Our best picks for various needs and budgets.",
      img: imgTopLaptops,
    },
    {
      index: -1,
      title: "The Growth of Gaming",
      text: "How the pandemic has sparked fresh opportunities.",
      img: imgGamingGrowth,
    },
  ];

  return (
    <div className={className}>
      {footerItems.map((f, index) => {
        return (
          <FooterItem
            index={index + 1}
            key={index}
            title={f.title}
            text={f.text}
            img={f.img}
            className={"flex flex-row gap-4"}
          ></FooterItem>
        );
      })}
    </div>
  );
};

export default Footer;
