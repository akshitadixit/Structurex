var ARR = [50,25,60,12,30];
var divs = [];
var lines=[];
var N = 15;
var delay1 = 0; //milliseconds
var delay2 = 500; 
var cont = document.getElementById("array_container");
cont.style ="flex-direction";
window.onload = genArray();
    
function change(d, h, c) {
    setTimeout(function () { d.style = ` margin:0% 0.1%;  width:7%; height:10%; background-color:${c};`; d.textContent=h;
     }, delay1 += delay2);
}
function node(i)
{
    divs[i] = document.createElement("div");
    cont.appendChild(divs[i]);
    divs[i].style = ` margin:0% 0.1%;  width:2%; height:3%; background-color: #40E0D0;`;
    divs[i].textContent=ARR[i];
    divs[i].textAlign="center";
    divs[i].style.position="absolute"; 
}
function parent(i)
{
    return Math.floor((i-1)/2);
}
function genArray() {
        cont.innerHTML = "";
        node(0);
        divs[0].style.top=100+'px';
        divs[0].style.left=900+'px';
        var t=150;
        var u=150;
        var x;
        for(var i=1;i<5;++i)
        {
            var temp=parent(i);
            if(ARR[i]<ARR[temp])
            {
                node(i);
                x=parent(i);
                var rect=divs[x].getBoundingClientRect();
                divs[i].style.top=rect.top+t+'px';
                divs[i].style.left=rect.left-t+'px';
                t-=70;
                
            }
            else
            {
                node(i);
                x=parent(i);
                var rect=divs[x].getBoundingClientRect();
                divs[i].style.top=rect.top+u+'px';
                divs[i].style.left=rect.left+u+'px';
                u-=70;           
            }

        }

}
function loader(ch) {
    genArray();
    //bubbleSort();
    //insertionSort();
    var x;
    switch(ch)
    {
        case 1: Insert();
                        break;
        case 2: Search();
                        break;                
    }
}



