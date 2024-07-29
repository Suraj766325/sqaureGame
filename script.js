let a=document.getElementById("b1");
let b=document.getElementById("b2");
let c=document.getElementById("b3");
let d=document.getElementById("b4");


a.addEventListener("click",function(){
    a.innerHTML=`<h1>${Math.ceil(100*Math.random())}</h1>`;
})
a.addEventListener("mouseleave",function(){
    a.innerHTML="<h1>4</h1>";
})

let clr="red";
b.addEventListener("click",function(){
    if(clr=="red"){
        b.style.backgroundColor="green";
        clr="green";
    }
    else{
        b.style.backgroundColor="red";
        clr="red";
    }
})
b.addEventListener("mouseleave",function(){
    b.style.backgroundColor="white";
})



// rgb(a,b,c) where a,b,c lies between 0 10 250
c.addEventListener("click",function(){
    let r1=Math.floor(256*Math.random());
    let r2=Math.floor(256*Math.random());
    let r3=Math.floor(256*Math.random());
    c.style.backgroundColor=`rgb(${r1},${r2},${r3})`;
})
c.addEventListener("mouseleave",function(){
    c.style.backgroundColor="white";
})

d.addEventListener("click",function(){
    let r4=Math.floor(256*Math.random());
    let r5=Math.floor(256*Math.random());
    let r6=Math.floor(256*Math.random());
    a.style.backgroundColor=`rgb(${r4},${r5},${r6})`;
    b.style.backgroundColor=`rgb(${r6},${r4},${r5})`;
    c.style.backgroundColor=`rgb(${r5},${r6},${r4})`;
})
d.addEventListener("mouseleave",function(){
    a.style.backgroundColor="white";
    b.style.backgroundColor="white";
    c.style.backgroundColor="white";
})




