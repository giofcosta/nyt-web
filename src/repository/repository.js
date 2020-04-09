import axios from "axios";

const baseDomain = "https://api.nytimes.com";
const baseURL = `${baseDomain}/svc/`;
const apiKey = "7F9NEHLAtEXfNGJ0A1YLYOgkyI1PS90H";

const axiosInstance = axios.create({
  baseURL,
});

const requestHandler = (request) => {
  request.url += `.json?api-key=${apiKey}`;
  return request;
};

axiosInstance.interceptors.request.use((request) => requestHandler(request));

export default axiosInstance;
