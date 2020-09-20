"use strict";

function open(urlPath) {
    fetch(urlPath).then(function (response) {
        response.text().then(function (text) {
            console.log(text)
        });
    });

}
open("./source/resources/dataset.csv");