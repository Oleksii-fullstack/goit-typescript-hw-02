import React from "react";
import s from "./Grid.module.css";

type GridProps = {
  children: React.ReactNode;
};

const Grid = ({ children }: GridProps) => {
  return <ul className={s.list}>{children}</ul>;
};

export default Grid;
