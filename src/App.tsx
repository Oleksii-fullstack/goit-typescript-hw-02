import { JSX, useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { getPhotos } from "./service/unsplashAPI";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Heading from "./components/Heading/Heading";
import ImageModal from "./components/ImageModal/ImageModal";
import { ImageItem, ModalImage } from "./types";

const App = (): JSX.Element => {
  const [searchPhrase, setSearchPhrase] = useState<string>("");
  const [images, setImages] = useState<ImageItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [hasMorePhotos, setHasMorePhotos] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<ModalImage | null>(null);

  useEffect(() => {
    if (!searchPhrase) return;

    const fetchData = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const { results, total_pages } = await getPhotos(searchPhrase, page);
        if (total_pages === 0) {
          setIsEmpty(true);
          return;
        }
        setImages((prev) => [...prev, ...results]);
        setHasMorePhotos(page < total_pages);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [searchPhrase, page]);

  const handleFormSubmit = (value: string): void => {
    setSearchPhrase(value);
    setError("");
    setImages([]);
    setIsEmpty(false);
    setPage(1);
    setHasMorePhotos(false);
  };

  const handleLoadMore = (): void => {
    setPage(page + 1);
  };

  const handleCloseModal = (): void => {
    setModalIsOpen(false);
  };

  const handleOpenModal = (image: ModalImage): void => {
    setModalImage(image);
    setModalIsOpen(true);
  };

  return (
    <>
      <SearchBar onSubmit={handleFormSubmit} />
      {images.length > 0 && (
        <ImageGallery galleryList={images} openModal={handleOpenModal} />
      )}
      {hasMorePhotos && <LoadMoreBtn onClick={handleLoadMore} />}
      {error && <ErrorMessage error={error} />}
      {isEmpty && <Heading />}
      {isLoading && <Loader />}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={handleCloseModal}
        src={modalImage?.src || ""}
        alt={modalImage?.alt || ""}
      />
    </>
  );
};

export default App;
