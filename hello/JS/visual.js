var ARR = [];
var divs = [];
var N = 50;
var delay1 = 0; //milliseconds
var delay2 = 50; 
var cont = document.getElementById("array_container");
cont.style ="flex-direction:row";

window.onload = genArray();
    
function change(d, h, c) {
    setTimeout(function () { d.style = ` margin:0% 0.2%;  width: 20px; height:${h}px; background-color:${c};`; }, delay1 += delay2);
}

function genArray() {
    cont.innerHTML = "";

    for(var i=0; i<N; i++) {
        ARR[i] = Math.floor((Math.random() * 100) + 1);
        divs[i] = document.createElement("div");
        cont.appendChild(divs[i]);
        divs[i].style = ` margin:0% 0.2%;  width:20px; height:${ARR[i]}px; background-color: #40E0D0;`;
    }
}

function sort(ch) {
    genArray();

    switch(ch) {
        case 1: bubbleSort();
            break;
        case 2: insertionSort();
            break;
        case 3: selectionSort();
            break;
        case 4: Merge();
            break;
        case 5: Quick();
            break;
        case 6: Heap();
            break;
    }
}