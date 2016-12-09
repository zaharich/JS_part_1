'use strict'; 
// Идентификатор пользователя 
var userID = 0; 

//=================================================================
var users = [ 
{ 
   firstName: 'Dmitry', 
   lastName: 'Kozlov', 
   birthDay: '16.07.1990', 
   phones: [ 
     '89001234567', 
     '83431234567' 
   ], 
   id: userID++  
}, 
{ 
   firstName: 'Ivan', 
   lastName: 'Petrov', 
   birthDay: '08.06.1956', 
   phones: [ 
     '89001234567', 
     '83431234567' 
   ], 
   id: userID++    
} 
]; 

//================================================================
function addUser(users) { 
  var user = {}; 
  user.firstName = prompt('Введите имя:'); 
  user.lastName = prompt('Введите фамилию:'); 
  user.birthDay = prompt('Дату рождения:'); 
  user.phones = []; 
  while(1){ 
    var phoneNumber = prompt("Введите номер телефона. пустая строчка - выход") 
    if(!phoneNumber) 
      break;  
    user.phones.push = prompt('Номер телефона:'); 
  } 
  user.id = usersID++; 
  users.push(user); 
} 


//==================================================================
function printUsers() { 
 for (var i = 0; i < users.length; ++i) { 
   console.log('Имя: ' + users[i].firstName, 'Фамилия: ' + users[i].lastName, 
    'Дата рождения: ' + users[i].birthDay, 'Телефоны: ' + users[i].phones.join(', ')); 
 } 
} 


//=================================================================
function csvFormat(users) { 
  return users.map(function(user) { 
    return Object.keys(user).map(function(key) {  
      if(typeof user[key] == 'string' || typeof user[key] == 'number') 
        return '"' + user[key] + '"';  
      else 
        return user[key].map(function(phone) { 
          return '"' + phone + '"'; 
        }).join(';'); 
    }).join(';'); 
  }).join('\r\n'); 
} 


//=================================================================
function deleteUser(user) { 
  for(var key in users) { 
    if (users[key]['id'] == userNumb){ 
      users.splice(key, 1); 
      break; 
    }
  } 
} 
