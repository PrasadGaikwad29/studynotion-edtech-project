import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})

export const apiConnector = (method, url, bodyData, headers, params) => {
  return axiosInstance({
    method,
    url,
    data: bodyData || null,
    headers: headers || null,
    params: params || null,
  })
}
