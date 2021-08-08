import axios from "axios"

const API_URL = process.env.VUE_APP_API_URL
const PUBLIC_KEY = process.env.VUE_APP_PUBLIC_KEY
const SECRET_KEY = process.env.VUE_APP_SECRET_KEY

const user = {
  isLoggedIn () {
    return !!localStorage.userData
  },
  ping: () => {
    return axios.get(`${API_URL}/v1/auth/app/ping`)
  },
  getTemplate: () => {
    return axios.get(`${API_URL}/v1/auth/app/login/page`, {
      headers: {
        public_key: PUBLIC_KEY
      }
    })
  },
  sendOtp: (email, redirectUrl) => {
    return axios.post(`${API_URL}/v1/auth/app/login/start`, {
      email,
      redirectUrl
    }, {
      headers: {
        public_key: PUBLIC_KEY
      }
    })
  },
  checkStatus: (statusToken) => {
    return axios.post(`${API_URL}/v1/auth/app/login/status`, {
      statusToken
    }, {
      headers: {
        public_key: PUBLIC_KEY
      }
    })
  },
  sendConfirmation: ({otp, statusToken, verifyToken}) => {
    return axios.post(`${API_URL}/v1/auth/app/login/confirm`, {
      otp,
      statusToken,
      verifyToken
    }, {
      headers: {
        public_key: PUBLIC_KEY
      }
    })
  },
  getUser: (userAuthId) => {
    return axios.get(`${API_URL}/v1/auth/app/login/user/${userAuthId}`, {
      headers: {
        secret_key: SECRET_KEY
      }
    })
  },
  logout () {
    return new Promise((resolve) => {
      delete localStorage.userData
      resolve()
    })
  }
}

export default user