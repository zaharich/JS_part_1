
function objectToQueryString(object)
{
  return Object.keys(object).map( function(item){
    return item + '=' + object[item];
  }).join('&');
}

//var obj = {user: 'Dmitry'};
// var obj = {user: 'Dmitry', password: 'pass'};
var obj = {user: 'Dmitry', password: 'pass', id:1};
console.log(objectToQueryString(obj));
