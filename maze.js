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
let hit_wall = false;
for (let index = 0; index < allBoundary.length; index++)
{
	allBoundary[index].onmouseover = function ()
	{
		for (let j = 0; j < allBoundary.length-1; j++)
		{
			allBoundary[j].setAttribute("class","boundary youlose");
			hit_wall = true;
		}
//Excercise 3----------------------------------------------------------------------------------------------------------------------------------
		alert("You Lose!");
		}
	};

   	let win = document.getElementById("end");
  	win.onmouseover = function()
  	{
  		if (hit_wall === false){
		alert("You Win!");
		}
	};

//Exercise 4-----------------------------------------------------------------------------------------------------------------------------------

let mazeStart = document.getElementById("start");
  	mazeStart.onclick = function(){
  		if (hit_wall === true){
  			for (let m = 0; m < allBoundary.length-1; m++){
  			allBoundary[m].setAttribute("class","boundary");
			}
			hit_wall = false;
  	}
   };

//----------------------------------------------------------------------------------------------------------------------------------------------
 };