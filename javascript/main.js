let url = "./javascript/data.json"
let datos

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        datos = data
    }
    );

    var cad= ``

    for (element of data){
       cad=cad + `<img src=${imagen} alt="book_cover"></img>
       `
    }


    console.log (cad)
    //document.getElementById("boxcontainer").innerHTML=cad