function black(str){
  div = document.createElement('div');
  div.className = "black div";
  div.innerHTML = str;
  feild.appendChild(div);
} 
function white(str){
  div = document.createElement('div');
  div.className = "white div";
  div.innerHTML = str; 
  feild.appendChild(div);
}
function addEdge(str){
  div = document.createElement('div');
  div.className = "nearWhite div";
  div.innerHTML = str; 
  feild.appendChild(div);  
}
function addImg(src){
  var img = document.createElement('img');
  img.className = "image";
  img.src = src;
  div.appendChild(img);
}


var feild = document.createElement('div');
feild.className = "feild";
document.body.appendChild(feild);

var div; 

var length = 8;
var b = true;
var fig = ' лксфкскл'.split('');
var abc = ' abcdefgh'.split('');
var num = ' 12345678'.split('');
//var im = ['images/конь.png','images/пешка.png','images/конь_б.png','images/пешка_б.png'];

for(var i = 0; i <= length; i++){
  for(var j = 0; j <= length; j++){
    b = !b;
    if(j == 0){
      addEdge(num[i]);
      continue;
    }
    if(i == 0){
      addEdge(abc[j]);
      continue;
    }
    var str = '';
    if(i == 1)           {str = fig[j];}
    //if(i == 1) {addImg(im[0]);}
    if(i == 8)           {str = fig[9-j];}
    if(i == 2 || i == 7) {str = 'п';}
    b ? black(str) : white(str);
    if(i <= 2) {div.style.color = 'white';} 
  }
}


// можно ли передавать элемент как параметр функции?