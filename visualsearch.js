var ARR = [0,12,34,45,52,62,81,111,167,265,521,529,536];
var divs = [];
var N = 12;
var delay1 = 0; //milliseconds
var delay2 = 500; 
var cont = document.getElementById("array_container");
cont.style = "flex-direction";
window.onload = genArray();
    
function change(d, h, c) {
    setTimeout(function () { d.style = ` margin:0% 0.1%;  width:40px; height:${40}px; background-color:${c};`; d.textContent=h;
    d.style.paddingLeft='20px';  d.style.paddingTop='20px'; }, delay1 += delay2);
}

function genArray() {
    cont.innerHTML = "";
    for(var i=0;i<N;i++) {
        divs[i] = document.createElement("div");
        cont.appendChild(divs[i]);
        divs[i].style = ` margin: 0 0.2%; padding: 20px 0px 0px 0px;  width:60px; height:${40}px; background-color: #40E0D0; text-size:5%; text-align: center;`;
        divs[i].textContent=ARR[i];
    }
}
function search(ch) {
    genArray();
    //bubbleSort();
    //insertionSort();
    // var x;
    switch(ch) {
        case 1: linearsearch();
            break;
        case 2: binarysearch();
            break;                
    }
}



