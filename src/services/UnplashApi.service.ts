import { WithPagination } from "../interfaces/response.interface";
import httpRequest from "./HttpRequest";

const client_id = import.meta.env.VITE_UNSPLASH_API_KEY;
if (!client_id) throw new Error("Client Id Not Found!!");

class UnplashApiService {
    getImages(query: string = "random", page = 1, perPage = 10) {
        return httpRequest.get<WithPagination<unknown>>(import.meta.env.VITE_UNSPLASH_BASE_URL + 'search/photos', { query, page, perPage });
    }
}

export default new UnplashApiService();
