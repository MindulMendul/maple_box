import axios from "axios";

// 인증이 필요없는 인스턴스
export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_MAPLEURL,
  timeout: 5000,
});
