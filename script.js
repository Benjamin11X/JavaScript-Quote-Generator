let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let container_background = document.querySelector('.container');
let person = document.querySelector('.person');

const quotes = [
    {quote: `"Hello World"`, 
    person: 'First Computer',
    background: `IT.jpg`},
    {quote: `"A rose by any other name would smell as sweet"`,
    person: `Wiliam Shakespeare`,
    background: `ROSE.jpg`},
    {quote: `"Ask not what your country can do for you; ask what you can do for your country"`,
    person: `John Kennedy`,
    background: 'AMERICA.jpg'},
    {quote: `"Eighty percent of success is showing up"`,
    person: `Woody Allen`,
    background: 'CINEMA.jpg'},
];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);
    let tree = `url('style/images/` + quotes[random].background + `')`;
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
    container_background.style.backgroundImage = tree;
});