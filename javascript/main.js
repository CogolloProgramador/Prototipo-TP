let url="./javascript/data.json"
let datos

fetch(url)
.then(response => { return response.json();})
.then(data => {console.log(data)
    datos = data 
   } 
    );
    