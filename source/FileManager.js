"use strict";

async function readCsv(urlPath) {
    const response = await fetch(urlPath);
    return response.text();
}

async function convertToMatrix(urlPath){
    const data = await readCsv(urlPath);
    return $.csv.toArrays(data);
}

convertToMatrix("./source/resources/dataset.csv").then(response => console.log(response));