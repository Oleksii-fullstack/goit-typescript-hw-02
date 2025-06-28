import s from "./GridItem.module.css";

type GridItemProps = {
  children: React.ReactNode;
};

const GridItem = ({ children }: GridItemProps) => {
  return <li className={s.item}>{children}</li>;
};

export default GridItem;
