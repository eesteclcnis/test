
var trailers=["https://www.youtube.com/embed/3Co8Z8BQgWc","https://www.youtube.com/embed/UcmZN0Mbl04","https://www.youtube.com/embed/jvQUIt0BWcU",
"https://www.youtube.com/embed/pU8-7BX9uxs","https://www.youtube.com/embed/zAGVQLHvwOY","https://www.youtube.com/embed/AST2-4db4ic",
"https://www.youtube.com/embed/BHi-a1n8t7M","https://www.youtube.com/embed/1Vnghdsjmd0","https://www.youtube.com/embed/SEUXfv87Wpk",
"https://www.youtube.com/embed/RS3aHkkfuEI","https://www.youtube.com/embed/Hyag7lR8CPA","https://www.youtube.com/embed/T5OhkFY1PQE"];
$(document).ready(function(){
	
$('#myModal').on('hidden.bs.modal', function (e) {
	document.getElementById("frame").src="src";
});
});
function openTrailer(num){
	document.getElementById("frame").src=trailers[num];
}