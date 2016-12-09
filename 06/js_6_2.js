// Напишите две функции, reverseArray и reverseArrayInPlace. 
// Первая получает массив как аргумент и выдаёт новый массив, 
// с обратным порядком элементов. Вторая работает как оригинальный 
// метод reverse – она меняет порядок элементов на обратный в том 
// массиве, который был ей передан в качестве аргумента. Не используйте 
// стандартный метод reverse.
function swap(idx1, idx2, arr){
  var tmp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = tmp;
}

function reverseArray(array){
  for(var i = 0; i < array.length/2; i++)
    swap(i, array.length - i - 1, array);
  return array;
}
//вариант 2
function reverseArray2(array){
  var b;
  array.forEach(function(item, i, arr){
    b[i] = arr[arr.length - i - 1];
  });
  return b;
}

function reverseArrayInPlace(){
  for(var i = 0; i < this.length/2; i++)
    swap(i, this.length - i - 1, this);
  return this;
}



var a = [1,2,3];
var b = ['a', 'b', 'c', 'd', 'яблоко', 'апельсин', 'мандарин'];
// console.log(reverseArray(a));
// console.log(reverseArray(b));

a.reverseMy = reverseArrayInPlace;
console.log(a.reverseMy());