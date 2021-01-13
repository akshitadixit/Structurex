var ARR = [50,25,60,12,30,55,75];
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
function drawline(adult,child)
{
  var parentpos=adult.getBoundingClientRect();
  var childpos=child.getBoundingClientRect();
  var canvas = document.getElementById('DemoCanvas');

  if (canvas.getContext) 
  {
  var context = canvas.getContext('2d');
  context.beginPath(); 
  context.moveTo(parentpos.left+30,parentpos.top-30);
  context.lineTo(childpos.left+30,childpos.top-30);
  context.stroke();
   }


}

function genArray() {
        cont.innerHTML = "";
        node(0);
        divs[0].style.top=100+'px';
        divs[0].style.left=900+'px';
        var t=150;
        var u=150;
        var x;
        for(var i=1;i<7;++i)
        {
            var temp=parent(i);
            if(ARR[i]==-1)
                continue;
            if(ARR[i]<ARR[temp])
            {
                node(i);
                x=parent(i);
                var rect=divs[x].getBoundingClientRect();
                divs[i].style.top=rect.top+t+'px';
                divs[i].style.left=rect.left-t+'px';
                t-=30;
                drawline(divs[x],divs[i]);
            }
            else
            {
                node(i);
                x=parent(i);
                var rect=divs[x].getBoundingClientRect();
                divs[i].style.top=rect.top+u+'px';
                divs[i].style.left=rect.left+u+'px';
                u-=30;  
                drawline(divs[x],divs[i]);         
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



