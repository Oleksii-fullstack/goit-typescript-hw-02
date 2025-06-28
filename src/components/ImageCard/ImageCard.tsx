import { ModalImage } from "../../types";
import s from "./ImageCard.module.css";

interface ImageCardProps {
  color: string;
  src: string;
  srcLarge: string;
  alt: string;
  openModal: (data: ModalImage) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  color,
  src,
  srcLarge,
  alt,
  openModal,
}) => {
  return (
    <div
      className={s.card}
      style={{ backgroundColor: color, borderColor: color }}
    >
      <img
        className={s.image}
        src={src}
        alt={alt}
        onClick={() => openModal({ src: srcLarge, alt })}
      />
    </div>
  );
};

export default ImageCard;
