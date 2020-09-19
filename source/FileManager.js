var $ = require( "jquery" );

const open = (urlPath) => {

    $.get(urlPath, function (data, status) {
        console.log(status);
        return data;    
    });

}

module.exports = open;