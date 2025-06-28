import s from "./Section.module.css";

type SectionProps = {
  children: React.ReactNode;
};

const Section = ({ children }: SectionProps) => {
  return <section className={s.section}>{children}</section>;
};

export default Section;
