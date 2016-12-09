function arrayToList(arr){
  var objList = null;
  arr.forEach(function(item, i, arr){
    objList = prepend(arr[arr.length - i - 1], objList);
  });
  return objList;
}

//вариант №2 без prepend
function arrayToList2(arr){  
  var list = null;
  arr.forEach(function(item, i, arr){
    list = {
      value: arr[arr.length - i - 1],
      rest: list
    };
  }); 
  return list;
}

//===========
function listToArray(list){
  var a = [];
  while(list){
    a.push(list.value);
    list = list.rest;
  }
  return a;
}

//============

var prepend = function(val, list){
  return { value: val, rest: list };
}
function prepend2(val){
  return { value: val, rest: this };
}

//============

function nth(list, n){
  var count = 0;
  while(1){
    if(!list)
      return undefined;
    else if(n == count)
      return list.value;
    else{
      count++;
      list = list.rest;
    }
  }
}

//============

function printList(list){
  while(list){
    console.log(list.value);
    list = list.rest;
  }
}


var list = arrayToList([1, 2, 3, 15, 45, -8, 0, 456789]);
printList(list);
list.add = prepend2;
list = list.add(256);
printList(list);
console.log(listToArray(list));
console.log(nth(list, 5));



