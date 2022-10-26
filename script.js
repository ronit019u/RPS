const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

info.textContent = 'Below is a dynamic list. Click anywhere on the page to add a new list item. Click an existing list item to change its text to something else.';

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function() {
  const listItem = document.createElement('li');
  const listContent = prompt('What content do you want the list item to have?');
  listItem.textContent = listContent;
  list.appendChild(listItem);  }

  btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });

  listItem.onclick = function(e) {
    e.stopPropagation();
    const listContent = prompt('Enter new content for your list item');
    this.textContent = listContent;
  }

const container = document.querySelector('#container');
const content = document.createElement('div');
content.textContent = "The is the great day";
container.appendChild(content);
const say = document.createElement('p');
say.textContent = 'Hey I am red';
say.style.color = 'red';
document.getElementById('container').appendChild('say');

const say2 = document.createElement('h3');
 say2.textContent = 'Iam blue h3!';
 say2.style.color = 'blue';
 document.getElementById('container').append('say2');

 const part = document.createElement('div');
part.style.border = 'black';
part.style.background = 'pinl';

const pa1 = document.createElement('h1');
pa1.textContent = 'I am in a div';
part.appendChild('pa1');

const pa2 = document.createElement('p');
pa2.textContent = 'ME TOO!';
part.appendChild('pa2');

document.body.insertBefore(part,null);
