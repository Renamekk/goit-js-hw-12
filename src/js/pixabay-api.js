import axios from "axios";

export const searchParams = {
    key: "44868701-a6c2bf036a020cab1604664f3",
    q: "",
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    page: 1,
    per_page: 15,
};

export async function getPictures() {
    const response = await axios.get("https://pixabay.com/api/", {params: searchParams});
        return response.data;
}