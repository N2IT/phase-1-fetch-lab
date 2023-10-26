let allPages = 0

function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => renderBooks(json))
  // .then((json) => console.log(json))
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);

    //locate 1031st Character
    let characters = book.characters
    const character1031 = characters.find(character => character === 'https://anapioficeandfire.com/api/characters/1031')
    const p = document.createElement('p')
    p.textContent = character1031
    main.appendChild(p)

    //count the number of pages
    let pages = book.numberOfPages
    allPages += pages
    console.log(allPages)
  });

  //Change color of 5th book in selection
  let fifth = document.querySelectorAll('h2')[4]
  fifth.style.backgroundColor="Yellow"
  fifth.textContent = `${fifth.textContent} - This is the 5th book in the collection!`

}

//all pages summed up

console.log(allPages)
// let pagesTotaled = allPages.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// },0);
// console.log(pagesTotaled)

// let testTotal = allPages.map(element => {
//   return element
// })
// console.log(testTotal)

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});




