
function numberToObject(a)
{
  var obj = {};
  if(a >= 1e3 || a < 0)
  {
    console.log('Число превышает 999 или меньше 0');
    return obj;
  }
  var arr = String(a).split('');
  obj.units = +arr[0];
  (arr[1] != undefined) ? (obj.dozens = +arr[1]) : (obj.dozens = 0);
  (arr[2] != undefined) ? (obj.hundreds = +arr[2]) : (obj.hundreds = 0);
  return obj;
}

var x = prompt('Введите число от 0 до 999');
console.log(numberToObject(x));