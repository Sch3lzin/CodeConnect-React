import axios from "axios";

export const http = axios.create({
  baseURL: "http://localhost:3000",
});

http.interceptors.request.use(
  function (config) {
    // Faz alguma coisa antes da requisição ser enviada
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers = {
        Authorization: `Bearer ${JSON.parse(token)}`,
      };
    }
    return config;
  },
  function (error) {
    // Faz alguma coisa com o erro da requisição
    return Promise.reject(error);
  }
);
