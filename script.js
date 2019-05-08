

  const body = document.body;
let frogPosition = {x: 7, y: 6}
let div2Position = {x:8, y:3.5}
let div3Position = {x:8, y:1.3}
let div4Position = {x:8, y:5.6}
 
// function deadFrog() {
  
// }
// function collision() {


// }

let frog = document.createElement('div');
  frog.className ='frog';
  body.appendChild(frog);
     frog.style.left = (frogPosition.x * 100) + "px";
     frog.style.top = (frogPosition.y * 100) + "px";


    

let div2 = document.createElement('div');
div2.className = 'car';
body.appendChild(div2);
div2.style.left = (div2Position.x * 100) + "px";
div2.style.top = (div2Position.y * 100) + "px";


let div3 = document.createElement('div');
div3.className = 'car';
body.appendChild(div3);
div3.style.left = (div3Position.x * 100) + "px";
div3.style.top = (div3Position.y * 100) + "px";

let div4 = document.createElement('div');
div4.className = 'car';
body.appendChild(div4);
div4.style.left = (div4Position.x * 100) + "px";
div4.style.top = (div4Position.y * 100) + "px";


//code to attain height of frog for collision detection//
// https://stackoverflow.com/questions/294250/how-do-i-retrieve-an-html-elements-actual-width-and-height
let frogHeight = frog.offsetHeight;
let frogWidth = frog.offsetWidth;
let div2Width = div2.offsetWidth;
let div2Height = div2.offsetHeight;
let div3Width = div3.offsetWidth;
let div3Height = div3.offsetHeight;
let div4Width = div4.offsetWidth;
let div4Height = div4.offsetHeight;

//  collision code :
// //  https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection

if(frog.style.top > div2.style.top && frog.style.top < div2.style.top +div2Height && frog.style.left > div2.style.left && frog.style.left < div2.style.left + div2Width) {
console.log("hello world")}
if(frog.style.top > div3.style.top && frog.style.top < div3.style.top +div3Height && frog.style.left > div3.style.left && frog.style.left < div3.style.left + div3Width) {
  console.log("hello world")}
  if(frog.style.top > div4.style.top && frog.style.top < div4.style.top +div4Height && frog.style.left > div4.style.left && frog.style.left < div4.style.left + div4Width) {
    console.log("hello world")}

// //blerf code for keyboard movement, went over in class//

const isCoordinateInGrid = (x, y) => {

  return !(x < 0 || y < 0 || x*100 > window.innerWidth  || y*100 > window.innerHeight );

}

const canMoveTo = (x, y) => {
    if (!isCoordinateInGrid(x, y)) {

         return false;
     }
     return true;
 }
 
 const moveRight = () => {
     if (canMoveTo(frogPosition.x + .5, frogPosition.y)) {
         frogPosition.x += .5;
        
     
         moveCharacterTo();
     }
 }
 
 const moveLeft = () => {
     if (canMoveTo(frogPosition.x - .5, frogPosition.y)) {
         frogPosition.x -= .5;
         //help from Michael//
      
         //if frog coordinates equal car coordinates//
        //  if (frogPosition.x === div2Position.x ||frogPosition.x === div3Position.x ||frogPosition.x === div4Position.x){
        //    alert(frog dead!)
         
         moveCharacterTo();
     }
     }
 
    
 const moveDown = () => {
     if (canMoveTo(frogPosition.x , frogPosition.y + .5)) {
         frogPosition.y += .5;
         
         moveCharacterTo();
     }
 }
 
 const moveUp = () => {
     if (canMoveTo(frogPosition.x , frogPosition.y - .5)) {
         frogPosition.y -= .5;
      
         moveCharacterTo();
     }
 }
 
 document.body.addEventListener('keydown', evt => {
     const keyCode = evt.keyCode;
  
     if ([37, 38, 39, 40].includes(keyCode)) {
         evt.preventDefault();
     }
     switch (keyCode) {
         case 37:
         moveLeft();
         break;
       case 38:
         moveUp();
         break;
       case 39:
         moveRight();
         break;
       case 40:
         moveDown();
         break;
     }
 })

 //with help from Rachel//
 const moveCharacterTo = (x, y) => {
  const charElement = document.querySelector('.frog');
  charElement.style.left = `${(frogPosition.x * 100)}px`;
  charElement.style.top = `${(frogPosition.y * 100)}px`;
 }


let xAxisCar1 = 800;
let xAxisCar2 = 800;
let xAxisCar3 = 1000;


function moveCar(){
  // Mohammed's help on changing the format of this function to represent current values of car rather than initial, for "if car coord === frog coord" collision function
  div2.style.transform = `translateX(${xAxisCar1}px)`;
  div3.style.transform = `translateX(${xAxisCar2}px)`;
  div4.style.transform = `translateX(${xAxisCar3}px)`;
  // div2.style.left = (parseFloat(div2.style.left) - 10)+"px"
  // div3.style.left = (parseFloat(div2.style.left) - 5)+"px"
  // div4.style.left = (parseFloat(div2.style.left) - 10)+"px"
  
  
}
// Mohammed's help on random function
// function randomFunction(range){
//   return Math.floor(Math.random() * range ) 
// }
///Mohammed helped with getting the cars to loop//

setInterval(()=>{
  xAxisCar1-= 4;
  xAxisCar2-=9;
  xAxisCar3-=7;
  
 
  moveCar();

},10)
 
setInterval(()=>{
  xAxisCar1 = 800;
  xAxisCar2 = 800;
  xAxisCar3 = 800;
  // div2.style.left = 900+"px"
  // div3.style.left = 1000+"px"
  // div4.style.left = 900+"px"
 
  // yAxisCar1 = 500;
  // yAxisCar2 =400;
  // yAxisCar3 =300;
  moveCar();
},5000)

// collision detection


