var axios = require("axios");

var apiKey = "f595f0f81ec1457883bcc5f33714775e";

var helper = {
    runQuery: function(topic, startYear, endYear) {
        var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + ("1231&api-key=" + apiKey);
        return axios.get(queryURL).then(function(response) {
            console.log("helpers.js 7: NYT query response: ", response);
        });
    }
};

module.exports = helper;