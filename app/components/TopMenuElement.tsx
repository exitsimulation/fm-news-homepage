import { ITopMenuElementProps } from "../../user";

const TopMenuElement = ({
  className,
  children,
  title,
}: ITopMenuElementProps) => {
  return <div className={className}>{title}</div>;
};

export default TopMenuElement;
