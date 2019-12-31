var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");


for (var i=0; i<li.length; i++){
	var span = document.createElement("SPAN");
	var close = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(close);
	li[i].appendChild(span);
}


var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


function addListItem(){
	var li = document.createElement("LI");
	li.appendChild(document.createTextNode(input.value));
	ul.append(li);
	input.value = "";
	var span = document.createElement("SPAN");
	var close = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(close);
	li.appendChild(span);
}


function afterClick(){
	if(input.value.length > 0) {
		addListItem();
	}
}

function afterPress(e){
	if((input.value.length > 0) && (e.keyCode === 13)){
		addListItem();
	}
}

function strikeAfterClick(e){
	if(e.target.tagName === "LI"){
		e.target.classList.toggle("done");
	}
}



ul.addEventListener("click", strikeAfterClick);

button.addEventListener("click", afterClick);

input.addEventListener("keypress", afterPress);