let url = "./javascript/data.json"
let datos = []

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        datos = data.datos


        let cad = `<div class="conteTarjetas">`

        for (element of datos) {
            cad += `
        <div class="tarjeta"> 
            <img src=${element.cover} alt="book_cover"></img>
            <h4>${element.tittle}</h4>
            <p>${element.author}</p>
        </div>    
    
       `
       
        }
  cad=`
           </div>
              `

console.log(cad)
    document.getElementsByClassName("tarjeta").innerHTML=cad
  }
    );