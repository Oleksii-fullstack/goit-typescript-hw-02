import axios from "axios";
import { ImageItem } from "../types";

export interface GetPhotosResponse {
  results: ImageItem[];
  total_pages: number;
}

export const getPhotos = async (
  query = "",
  page = 1
): Promise<GetPhotosResponse> => {
  const { data } = await axios.get<GetPhotosResponse>(
    "https://api.unsplash.com/search/photos",
    {
      headers: {
        Authorization: "Client-ID 8Fbg8XV6Im7lJs0f1VbzghdLqBqqzYRxKYWlEuiAB6o",
        AcceptVersion: "v1",
      },
      params: {
        query,
        page,
        per_page: 10,
      },
    }
  );
  return data;
};
