require('./style.scss');
console.log('init');


const app = require('./app.html')

console.log(app)

const appEl = document.getElementById('app');
console.log(app);

appEl.innerHTML = app;

const cat = require('./public/images/cat1.jpeg');
console.log(cat);
