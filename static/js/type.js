var segments = [ 
	" games", 
	" neural networks", 
	" websites", 
	" simulations"
];
var part = 0;
var index = 0;
var interval;
var element = document.querySelector(".type");
var cursor = document.querySelector(".cursor");
function Type() { 
	var text =  segments[part].substring(0, index + 1);
	element.innerHTML = text;
	index++;
	if(text === segments[part]) {
		clearInterval(interval);
		setTimeout(function() {
			interval = setInterval(Delete, 50);
		}, 1000);
	}
}
function Delete() {
	var text =  segments[part].substring(0, index - 1);
	element.innerHTML = text;
	index--;
	if(text === '') {
		clearInterval(interval);
		if(part == (segments.length - 1))
			part = 0;
		else
			part++;
		index = 0;
		setTimeout(function() {
			interval = setInterval(Type, 100);
		}, 200);
	}
}
interval = setInterval(Type, 100);
