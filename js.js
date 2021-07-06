let a = 0;
let images = [];
let time = 5000;
images[0] = "http://www.stolovay.ru/upload/iblock/104/104e445be381a1c4042cf8bf7cf774a2.png";
images[1] = 'http://www.stolovay.ru/upload/iblock/16c/16c6b01ed4f7db9c8fcc7d657ffac106.png';
images[2] = 'http://www.stolovay.ru/upload/iblock/87a/87af12b23586c554680c7ba842a5ee64.png';

function changeImg() {
    document.slide.src = images[i];
    if(a < images.length-1){ a++;}
    else{a = 0;}
    setTimeout('changeImg()' , time);
}
window.onload = changeImg();


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "menu-top-wrap") {
    x.className += " responsive";
  } else {
    x.className = "menu-top-wrap";
  }
}