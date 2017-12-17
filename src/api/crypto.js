import {apiBaseUrl} from './../utils/constants'
import axios from 'axios'

export default {
  getCryptos (cb, errorCb) {
    axios.get(`${apiBaseUrl}/v1/ticker/?limit=10`)
      .then(res => {
        cb(res.data)
      })
      .catch(error => {
        errorCb(error.data)
      })
  }
}
