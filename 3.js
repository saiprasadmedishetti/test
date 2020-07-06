const cheerio = require("cheerio");
const request = require("request");

request(
  {
    method: "GET",
    url: "http://localhost:8000",
  },
  (err, res, body) => {
    if (err) return console.error(err);

    let $ = cheerio.load(body);

    let metaTags = $("html head meta").attr("content").split("\n");

    metaTags.forEach((e) => {
      if (e) {
        console.log(e.replace(/(\s+)/g, ""));
      }
    });
  }
);
