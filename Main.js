const input = document.querySelector('#input');
const button = document.querySelector('#button');
const span = document.querySelectorAll('span');
const p = document.querySelectorAll('p');
const div = document.querySelector('#todos');
const h4 = document.querySelector("h4");
let area = document.getElementById("area");
let display = document.getElementById("sheet");
var card = document.getElementById('card');
button.addEventListener('click', (e) => {
  e.preventDefault()
  if(input.value == "") {
      setTimeout(() => h4.remove(),3000);
  return  h4.innerHTML = "Enter an event";
  }

  const text = `<p onclick="change(this)" >${input.value} <span>x</span></p>`;
  div.innerHTML += text;
  input.value = "";
  
  
});

function change(e){
 if(e.style.textDecoration == "none"){
   e.style.textDecoration = "line-through";
 } else {
   e.style.textDecoration = "none";
 }
}
function front(){
    card.style.transform = "rotateY(-180deg)";
  }
  function back(){
    card.style.transform = "rotateY(0deg)";
  }
  
  function enter(){
    let note = `${area.value}<spa> </spa>`;
  sheet.innerHTML += note;
  area.value = "";
  }