const data = [
    {
        id: 1,
        description: 'Drama'
    },
    {
        id: 2,
        description: 'Comédia',
    },
    {
        id: 3,
        description: 'Suspense'
    },
    {
        id: 4,
        description: 'Ficção'
    },
    {
        id: 5,
        description: 'Terror'
    },
    {
        id: 6,
        description: 'Comédia romântica'
    },
    {
        id: 7,
        description: 'Ficção científica'
    },
    {
        id: 8,
        description: 'Desenho'
    }
]

let show = document.getElementById("text").innerHTML; // salvando o que existe na tag 'div' com id=text na variavel 'show'

let show1 = data.map(element => {
  return `<div> <h4>${element.id}</h4> 
  <b>${element.description} </b> </div>`
});

document.getElementById("text").innerHTML = show1.join('') // trocando conteúdo de show pelo array criado pelo map