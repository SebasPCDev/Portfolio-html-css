
/* document.addEventListener('DOMContentLoaded', function() {
    
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    burgerMenu.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
}); */

let array = [0,1,2,3,4,5,6,7,8,9];
let e  = array.length;

console.time("for1")
for (let i = 0; i<array.length; i++){
}
console.timeEnd("for1")

console.time("for2")
for (let i = 0; i<e; i++){
}
console.timeEnd("for2")




