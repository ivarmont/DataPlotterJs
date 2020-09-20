"use strict";

async function readCsv(urlPath) {
    const response = await fetch(urlPath);
    return response.text();
}

async function convertToMatrix(urlPath){
    const data = await readCsv(urlPath);
    return $.csv.toArrays(data);
}

function createTable(tableData) {
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');
  
    tableData.forEach(function(rowData) {
      var row = document.createElement('tr');
  
      rowData.forEach(function(cellData) {
        var cell = document.createElement('td');
        cell.appendChild(document.createTextNode(cellData));
        row.appendChild(cell);
      });
  
      tableBody.appendChild(row);
    });
  
    table.appendChild(tableBody);
    document.body.appendChild(table);
  }

convertToMatrix("./source/resources/dataset.csv").then( response => createTable(response)
    );