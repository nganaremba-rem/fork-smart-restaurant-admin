import axios from 'axios'

export const url = 'http://139.59.24.128:3003/backend/'
// export const url = 'https://6xmlzdw3-4000.inc1.devtunnels.ms/'
export const Axios = axios.create({
	baseURL: url,
})
