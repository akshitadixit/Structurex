var ARR = [0,12,34,45,52,62,81,111,128,167,265,434,521,529,536];
var divs = [];
var N = 15;
var delay1 = 0; //milliseconds
var delay2 = 500; 
var cont = document.getElementById("array_container");
cont.style ="flex-direction";
window.onload = genArray();
    
function change(d, h, c) {
    setTimeout(function () { d.style = ` margin:0% 0.1%;  width:40px; height:${40}px; background-color:${c};`; d.textContent=h;
    d.style.paddingLeft='20px';  d.style.paddingTop='20px'; }, delay1 += delay2);
}

function genArray() {
        cont.innerHTML = "";
        for(var i=0;i<N;i++)
        {
            divs[i] = document.createElement("div");
            cont.appendChild(divs[i]);
            divs[i].style = ` margin:0% 0.1%;  width:40px; height:${40}px; background-color: #40E0D0;`;
            divs[i].textContent=ARR[i];
            divs[i].style.paddingLeft="20px";
            divs[i].style.paddingTop="20px";
           
        }
      
}
function loader(ch) {
    genArray();
    //bubbleSort();
    //insertionSort();
    var x;
    switch(ch)
    {
        case 1: linearsearch();
                        break;
        case 2: binarysearch();
                        break;                
    }
}



