/*
Reading values from input textarea , select
Inline and JS based validation
showing error messages conditonally

Practice :
Email/password validator
*/
//for id use # before

let nm = document.querySelector("#name");
let form = document.querySelector("form");

form.addEventListener("submit", function(dets){
    dets.preventDefault();
    if(nm.value.length <=2){
        document.querySelector("#hide").style.display = "initial"
    } else { 
        document.querySelector("#hide").style.display = "none";
    }
})