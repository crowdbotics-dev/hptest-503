import axios from "axios"
import {
  CONNECTOR_KO_CONNECTOR_USERNAME,
  CONNECTOR_KO_CONNECTOR_PASSWORD
} from "react-native-dotenv"
const koconnector = axios.create({
  baseURL: "https://devstringx.com",
  auth: {
    username: CONNECTOR_KO_CONNECTOR_USERNAME,
    password: CONNECTOR_KO_CONNECTOR_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
