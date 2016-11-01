var axios = require('axios');

const TRUCKERSMP_API_ENDPOINT = 'https://api.truckersmp.com/v2';

module.exports = {
  getPlayer: function (id) {
    var requestUrl = `${TRUCKERSMP_API_ENDPOINT}/player/${id}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.error) {
        throw new Error(res.response);
      } else {
        return res.data.response;
      }
    }, function (res) {
      console.log(res);
      throw new Error(res);
    });
  },
  getBans: function(id) {
    var requestUrl = `${TRUCKERSMP_API_ENDPOINT}/bans/${id}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.error) {
        throw new Error(res.response);
      } else {
        return res.data.response;
      }
    }, function (res) {
      console.log(res);
      throw new Error(res);
    });
  }
};