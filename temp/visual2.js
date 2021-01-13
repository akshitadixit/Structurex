var ARR = [];
var divs = [];
var N = 20;
var delay1 = 0; //milliseconds
var delay2 = 50;
var a = 0;

function tree() {

  placeDiv(450/9, 10, 34);

  placeDiv(650/9, 20, 78)
  placeDiv(250/9, 20, 22)

  placeDiv(750/9, 30, 42)
  placeDiv(550/9, 30, 78)
  placeDiv(350/9, 30, 22)
  placeDiv(150/9, 30, 41)
  
  placeDiv(800/9, 40, 41)
  placeDiv(700/9, 40, 95)
  placeDiv(600/9, 40, 34);
  placeDiv(500/9, 40, 42);
  placeDiv(400/9, 40, 78)
  placeDiv(300/9, 40, 22)
  placeDiv(200/9, 40, 41)
  placeDiv(100 / 9, 40, 95)
  
  drawLine(ARR[0], ARR[1], 1);
  drawLine(ARR[0], ARR[2], 1)
}

function placeDiv(x, y, num) {
  var d1 = document.getElementById('myCanvas')
  var d = document.createElement("div");
  d1.appendChild(d);
  ARR[a++] = d;
    d.style.position = "absolute";
    d.style.left = x+'%';
    d.style.top = y+'%';
    d.style.border = '1px solid';
    d.style.borderRadius = '50%';
    d.style.width = '30px'
    d.style.height = '30px'
    d.innerHTML = num;
    d.style.verticalAlign = 'center';
    d.style.textAlign = 'center';
}

function genArray() {
  cont.innerHTML = "";

  for(var i=0;i<N;i++)
  {
      ARR[i] = Math.floor((Math.random() * 100) + 1);
      divs[i] = document.createElement("div");
      cont.appendChild(divs[i]);
      divs[i].style = ` margin:0% 0.1%;  width:10px; height:${ARR[i]}px; background-color: #40E0D0;`;
  }
}

window.onload = tree()

function drawLine(parent, child, k) {
  let p = parent.getBoundingClientRect();
  let c = child.getBoundingClientRect();

  let x1 = p.left;
  let y1 = p.bottom;
  let x2 = k == 1 ? c.right : c.left;  //to check left or right child
  let y2 = c.top;

  let line = document.createElement('div');
  document.getElementById('myCanvas').appendChild(line);

  line.style.width = Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1))-45 +'px';
  line.style.height = '0px';
  line.style.borderBottom = '1px solid black';
  line.style.position = 'absolute';
  line.style.top = (y1+y2)/2 + 'px';
  line.style.left = (x2 - x1) +60 + 'px';
  //let ang = Math.atan(((y2 + y1) / 2) / (x2 - x1))
  let ang = 14
  line.style.transform = 'rotate(-'+ang+'deg)'
}

