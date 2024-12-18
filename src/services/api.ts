import axios from "axios";

export const api = axios.create({
    baseURL: "http://192.168.30.129:3333",
    timeout: 700,
})