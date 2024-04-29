"use strict";

function checkOddNum(num) {
  return num % 2 != 0;
}

function checkEvenNum(num) {
  return num % 2 == 0;
}

function sumOfNums(arr, callback) {
  let sum = 0;
  for (const item of arr) {
    if (callback(item)) {
      sum += item;
    }
  }
  console.log(sum);
}

let nums = [1, 4, 5, 6, 9, 8];
// sumOfNums(nums,checkOddNum);
// sumOfNums(nums,checkEvenNum);
// sumOfNums(nums,m=>m>5)

// let result=nums.filter(m=>m>5)
// let result=nums.find(m=>m>5)
// let result=nums.findIndex(m=>m==5)


class Animal{
    constructor(height,width){
        this.height=height
        this.width=width
    }
}

// let animal=new Animal(100,200);

class Bird extends Animal { 
    constructor(){
        super(100,200)
        this.name="Devequshu"
    }

    getName(t){
        console.log("Salam");
    }
}

let bird=new Bird()

// bird.getName(100);

let name = "Ilgar"

let surname=new String();

surname="ssagol"

// console.log(surname);

class Test{ 
    constructor(name){
        this.name=name;
    }
}

Test.prototype.surname="Surname for test";

Test.prototype.getname=function(){
    console.log("This is test");
}

let test = new Test("salam");

// console.log(test.surname);

// test.getname();


String.prototype.customContains=function(searchtext){
    return this.includes(searchtext)
}

let namee="Reshad";

// console.log(name.customContains("h"));

let date=new Date();

let year=date.getFullYear();

let month=date.getUTCMonth();

let result= `${month+1} - ${year}`


// console.log(result);

let elems = document.getElementsByTagName("h1")
for (let i = 0; i < elems.length; i++) {
    const element = elems[i];
    console.log(element);
    
}

// console.log(h1);

// let elem = document.getElementsByClassName

// let elem=document.getElementById()

let h1=document.querySelector("h1")

// console.log(h1.innerHTML);

h1.innerText="<span>Reshad Bey</span>"

h1.style.color="Black"
h1.style.margin="200px"

h1.classList.add("product")
h1.classList.remove("product")

let button=document.querySelector("button")

button.addEventListener("click",function(){
    this.style.backgroundColor="black"
})