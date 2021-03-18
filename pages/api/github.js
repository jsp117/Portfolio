// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require("axios");

export default async function handler(req, res) {
  var token = process.env.TOKEN;
  let repos = await axios({
    url: "https://api.github.com/users/jsp117/repos",
    method: "GET",
    headers: {
      Accept: "application/vnd.github.v3+json",
      Username: "jsp117",
      Authorization: `token ${token}`,
    },
  }).then(function (response) {
    return response.data;
  }).catch(function (error) {
    console.log(error);
  });
  // display repos
  res.json(repos);
}
