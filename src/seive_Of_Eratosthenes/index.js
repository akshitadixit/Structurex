
/***********
 * fileName: index.js
 * date: 14 july 2021
 * Author: Victor Swaroop (@GVictorsd)
 *
 * file contains the Script to drive seiveErato.html
 *
 ************/


var ARR = [];
var divs = [];
var N = 60;
var delay1 = 0; //milliseconds
var delay2 = 500;
var cont = document.getElementById("array_container");
var Result = document.getElementById("array_container2");
window.onload = genArray();


function genArray() {
    cont.innerHTML = "";
    for (var i = 0; i < N; i++) {
        ARR[i] = i+1;
        divs[i] = document.createElement("div");
        cont.appendChild(divs[i]);
        divs[
            i
        ].style = ` margin: 0 0.2%; padding: 20px 0px 0px 0px; 
			width: ${60}px; height:${40}px; background-color: #40E0D0;
			text-size:5%; text-align: center; border-radius:10px;`;
        divs[i].textContent = ARR[i];
    }
}


function addResult(elem) {
	const div = document.createElement("div");
	Result.appendChild(div);
	div.style = ` margin: 0 0.2%; padding: 20px 0px 0px 0px; 
		width: ${60}px; height:${40}px; background-color: #40E0D0;
		text-size:5%; text-align: center; border-radius:10px;`;
	div.textContent = elem;
}

function change(d, h, c, delay) {
    setTimeout(function () {
        d.style.backgroundColor = c;
    }, (delay1 += delay));
}


function sieveEratos() {
	genArray();
	var mem = [];
	mem[1] = false;
	const defaultColor = "#40E0D0";
	const DELAY = 300;
	const highlightColor = "red";
	const primeColor = "#ffcc5c";
	const nprimeColor = "#82b74b";

	for(var i = 2; i<N; i++){

		if(mem[i] != true) {
			mem[i] = false;
			change(divs[i-1], 20, highlightColor, DELAY);
			change(divs[i-1], 20, primeColor, DELAY);

			for(var j = i*i; j<=N; j+=i){
				change(divs[j-1], 20, highlightColor, DELAY);
				change(divs[j-1], 20, nprimeColor, DELAY);
				mem[j] = true;
			}
		}
	}
}

