console.log('bobbyhadz.com');

const third = document.querySelector('#parent :nth-child(3)');
console.log(third); // 👉️ div.child3

const odd = document.querySelectorAll('#parent :nth-child(odd)');
console.log(odd); // 👉️ [div.child1, div.child3]
