

document.write("<h2>Вторая программа на JavaScript!</h2>"); // выводим заголовок
document.write("HELLO WORLD!"); 


        var a3 = 5 + 8;
        console.log("Результат операции");
        console.log(a3);
                          // выводим обычный текст



let x = 45;
let y = 23.897;

console.log(y);

let isAlive = true;
let isDead = false;

console.log(isAlive);

let company = "Бюро \"Рога и копыта\"";

console.log(company);


let user = "James";
let text = `Name: ${user}`;

console.log(text);  // Name: Tom


let id;
console.log(id + ":", typeof id);       // undefined
 
id = 45;
console.log(id + ":", typeof id);   // number
 
id = 45n;
console.log(id + ":", typeof id);     // bigint
 
id = "45";
console.log(id + ":", typeof id);     // string

isAlive = null;
console.log(isAlive, typeof isAlive); // null

const user1 = {name: "Tom", age:24};
console.log(user1.name, user1.age);


let a1 = 5;
++a1
console.log(++a1)
console.log(a1++)
console.log(++a1)
console.log(--a1)



const a = 1
const b = 2
const c = 3

const res_list = []
  
var z = a + b + c; 
res_list.push(z);  
  
var z1 = a * b * c; 
res_list.push(z1); 
  
var z2 = (a + b) * c; 
res_list.push(z2); 
  
var z3 = (a * b) + c; 
res_list.push(z3); 

var z4 = a * (b + c); 
res_list.push(z4); 

  
res_list.sort( (a, b) =>  a - b);
  
  
  /*for(let i = 0; i<2; i++){
      var z = a * b * c; 
      res_list.push(z); 
  z = res_list[0]    
  }*/

z6 = res_list[4]


console.log(res_list)   
console.log('max z:',z6)  
