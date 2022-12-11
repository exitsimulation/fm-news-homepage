import { IFooterItemProps } from "../../public/user";

import Image from "next/image";

const FooterItem = ({
  title,
  text,
  index,
  className,
  img,
}: IFooterItemProps) => {
  return (
    <div className={className}>
      <Image src={img} alt={"Image Retro PCs"} className={"h-full w-auto"} />
      <div className={"flex flex-col justify-between"}>
        <div className={"text-4xl font-bold text-grayish-blue"}>
          {"0" + index}
        </div>
        <div
          className={
            "text:bg-very-dark-blue cursor-pointer font-bold hover:text-soft-red"
          }
        >
          {title}
        </div>
        <div className={"text-dark-grayish-blue"}>{text}</div>
      </div>
    </div>
  );
};

export default FooterItem;
