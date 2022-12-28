import axios, { AxiosError } from 'axios';

// 글로벌 axios defaults 설정
// axios.defaults.baseURL = "http://localhost:8080/parking-car-admin"

// axios 인스턴스 생성
const client = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    withCredentials: true,
})

client.interceptors.response.use(
    response => response,
    (error: Error | AxiosError) => {
      console.log(error)
      if (!axios.isAxiosError(error)) {
        return;
      }
  
      if (error.response?.status === 401) {
        window.location.replace('/sign-in');
        localStorage.clear();
      }
  
      return Promise.reject(error);
    }
  
  )


export default client;