const axios = require("axios");

export default class httpService {
  static get = url => {
    return axios.get(url);
  };
}
