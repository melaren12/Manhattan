const div1 = document.querySelector('.img2');
console.log(div1);
const div3 = document.querySelector('.img1');
const div2 = document.querySelector('.carousel');
console.log(div2);
let x = 0;
let k = 0;

div1.addEventListener('click', (event) => { 
  if (x > -800) {
    x-=800     
  } else{
    x = 0
  }
  div2.style.transform = `translateX(${x}px)`;
});
div3.addEventListener('click', (event) => {
  if (x < 0) {
    x+=800     
  } else{
    x = -800
  }
  div2.style.transform = `translateX(${x}px)` 
});