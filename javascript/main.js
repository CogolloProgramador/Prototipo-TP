let url="./javascript/data.json"
let datos

fetch(url)
.then(response => response.json())
.then(data => {console.log(data)
    datos = data 
   } 
    );
    