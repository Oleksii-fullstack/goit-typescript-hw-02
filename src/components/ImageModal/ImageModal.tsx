import { JSX } from "react";
import Modal, { Styles } from "react-modal";

const customStyles: Styles = {
  overlay: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999999,
    backgroundColor: "rgba(45, 45, 45, 0.3)",
    backdropFilter: "blur(5px)",
  },
  content: {
    display: "flex",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0",
    padding: 0,
    width: "800px",
    height: "fit-content",
    opacity: 1,
    backgroundColor: "black",
    color: "white",
    inset: 0,
  },
};

Modal.setAppElement("#root");

interface ImageModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  src: string;
  alt: string;
}

const ImageModal = ({
  modalIsOpen,
  closeModal,
  src,
  alt,
}: ImageModalProps): JSX.Element => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <img src={src} alt={alt} />
    </Modal>
  );
};

export default ImageModal;
