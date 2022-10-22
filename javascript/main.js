const { createApp } = Vue  

  createApp({
    data() {
      return {
       
        url:'./javascript/data.json',
        books:[]
      } 
    },   
    methods: {
      fetchData(url) {

          fetch(url)
              .then(response => response.json())
              .then(data => { 
                  this.books=data.books
                  console.log(this.books)
              })

      }
  },
    created(){

      this.fetchData(this.url) 
    }

    
  }).mount('#app')













/*let url = "./data.json"
let libros = []

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        libros = data.libros


        let cad = `<div class="conteTarjetas">`

        for (element of libros) {
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
*/