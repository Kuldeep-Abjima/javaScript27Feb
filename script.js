console.log("Hello world")
// alert("me")
console.warn("this is warning");
console.error("this is an error");


var a = 5;
var b = 6;
console.log(a + b);


var mark = {
    harry: 25,
    tarry: 50,
    marry: 25,
}

console.log(mark);


console.log(a == b);
console.log(a > b);
console.log(a < b);
console.log(a != b);
console.log(a++);


function avg(a, b) {
    return (a + b) / 2;
}


c = avg(a, b);

console.log("avg" + c);


var arr = [1, 2, 3, 4, 5, "hello", 9, 0]

console.log(arr);

c = add(5+10)
console.log(c);
// arr.forEach(function (element) {
//     console.log(element)
// })


// arr.shift();
console.log(arr.unshift(10));



let mystr = "My Name is Kuldeep Singh";
b = mystr.replace("Kuldeep","Honey")
console.log(mystr.length)
console.log(mystr.slice(2,8))
console.log(b,mystr);

let date = new Date();
console.log(date.getDay())


var lr = document.getElementsByTagName("div");
var createdelement = document.createElement("P");
createdelement.innerText = "Hello World!"
lr[0].appendChild(createdelement);
console.log(lr);



function clicked(){
    console.log('the button is clicked')
}

window.onload = function(){
    console.log("page loaded")
};

var rr =document.getElementById("FirstContainer")
var prvhtml = document.querySelector(".btn").innerHTML
rr.addEventListener("mouseover", function(){
    var rrr = document.querySelector(".btn")
    rrr.innerHTML = "<b>Click on me!</b>"
    console.log(rrr)
    console.log("mouse on container")
})
rr.addEventListener("mouseleave",function(){
    var rrr = document.querySelector(".btn")
    rrr.innerHTML = prvhtml
    console.log("mouse not on container")
})


logkro = () =>{
   
    console.log("logged")
}

// setInterval(logkro,2000);

localStorage.setItem("Name","Kuldeep")


var f;
let dat;
let time;
var zs;
var rs;
let sb;



setInterval(() => {
    

 f = new Date();
dat = f.getUTCDate(); 
time = f.getHours() + ":" + f.getMinutes() + ":" +  f.getSeconds()

zs = document.getElementById("headingtag").innerText = "Current time :" + time

}, 1000);

function add(a, b){
    return a + b;
}
