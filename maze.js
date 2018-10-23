//Excercise 1-----------------------------------------------------------------------------------------------------------------------------------
window.onload = function (){
	main();
};
 function main(){
	let wall = document.getElementById("boundary1");
	wall.onmouseover = function()
	{
  	this.setAttribute ("class", "boundary youlose");	
		};

 };