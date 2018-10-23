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
//Excercise 2----------------------------------------------------------------------------------------------------------------------------------		
let allBoundary = document.querySelectorAll(".boundary");

for (let index = 0; index < allBoundary.length; index++)
{
	allBoundary[index].onmouseover = function ()
	{
		for (let index2 = 0; index2 < allBoundary.length-1; index2++)
		{
			allBoundary[index2].setAttribute("class","boundary youlose");
		}
	}
};

//----------------------------------------------------------------------------------------------------------------------------------------------
 };