function colorToHex(a, b, c)
{
  if(a>255 || b>255 || c>255 || a<0 || b<0 || c<0)
    return null;
  return ((+a).toString(16)) + ((+b).toString(16)) + ((+c).toString(16));
};

var c1 = prompt('Введите число 1');
var c2 = prompt('Введите число 2');
var c3 = prompt('Введите число 3');
console.log(colorToHex(c1, c2, c3));


