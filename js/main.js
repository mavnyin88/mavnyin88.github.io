

function printYear(y){

    var year = new Date();
    document.getElementById(y).innerHTML = year.getFullYear();

}

printYear('year');