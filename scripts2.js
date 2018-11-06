const ENTER_KEYCODE = 13;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const items = document.querySelector('.items');
  

  text.init(form, items);
});

const text = (() => {
  let items;

  function init(_form, _items) {
    items = _items;
    _form.addEventListener('submit', formHandler);

    // TODO láta hluti í _items virka
  }

  function formHandler(e) {
    e.preventDefault();

    console.log('halló heimur');
  }
  let itemsList = document.querySelector (".items");
  for (let item of itemsList.querySelectorAll('.item__checkbox')) {
    item.addEventListener('change', finish);
  }
  // event handler fyrir það að klára færslu
  function finish(e) {
    let span = e.target.nextElementSibling;
    if (e.target.checked){
      span.style.textDecoration = "line-through";
    }
    else {
      span.style.textDecoration = "none";
    }
  }
  for (let texti of itemsList.querySelectorAll(".item__text")){
    texti.addEventListener("click", edit);
  } 
  // event handler fyrir það að breyta færslu
  function edit(e) {

    for (let span of itemsList.querySelectorAll(".item__text")){

    span.style.display = "none";

    let text = span.innerHTML;

    let input = document.createElement("input");
    input.type = "text";
    input.value = text;
    span.parentNode.insertBefore(input, span);

    input.focus();
    input.select();
    input.onblur = function() {

      span.parentNode.removeChild(input);
      span.innerHTML = input.value;
      span.style.display = "";
    }
  }

  }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {
    if (keycode = 13)
      e.blur;
  }
  
  const newButton = document.querySelector (".form__button");
  const input = document.querySelector (".form__input");
  const checkbox = '<input type="checkbox" class="item__checkbox"></input>'
  const takki = '<button class="item__button">Eyða</button>'
  newButton.addEventListener("click", add);

  // fall sem sér um að bæta við nýju item
  function add(value) {
    if (input.value > " "){
      itemsList.innerHTML += '<li class = "item">' + checkbox + '<span class="item__text">' + input.value + '</span>' + takki + '</li>';
    }
  }
  let deleteButton = document.querySelectorAll (".item__button");
  deleteButton.addEventListener("click", deleteItem);
  // event handler til að eyða færslu
  function deleteItem(e) {
    itemsList.removeChild(items.childNodes[0]);
  }

  // hjálparfall til að útbúa element
  function el(type, className, clickHandler) {
  }

  return {
    init: init
  }
})();