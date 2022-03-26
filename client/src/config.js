import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://argisblog.herokuapp.com/api/"
})
