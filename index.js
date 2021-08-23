const { default: axios } = require("axios");

require("axios");

async function getMe() {
  axios.get('https://learningfromhome.govt.nz/api/provider_resource')
  .then(function (response) {
    response.data.data.map(res => {
  
      let title = res.attributes.title
      let url = res.attributes.uri.uri
      axios.get(url)
        .then(function (resp) {
          console.log(title + " | " + url + " | " + resp.status);
        }).catch(function (e) {
          console.log(title + " | " + url + " | " + e.response.status);
        })
    })
  })
};

getMe();
