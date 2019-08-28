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

let show = document.getElementById("app");

let show1 = data.map(element => {
  return `<p>${element.id} 
  ${element.description}</p>`
});

show.innerHTML = show1.join("");
