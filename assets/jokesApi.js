

function getJoke(){

var url="https://sv443.net/jokeapi/v2/joke/Programming";



setInterval(function(){  




	const Http = new XMLHttpRequest();

	Http.open("GET", url);
	Http.send();

	Http.onreadystatechange = function() {

  if(this.readyState == 4 && this.status==200){
  
  	var jokeData= JSON.parse(Http.responseText);
  	var joke="";

  	if(!jokeData.error){
  	if(jokeData.type=="twopart"){
  		console.log("Joke2: \n",jokeData.setup,"\n",jokeData.delivery,"\n");

  		var joke=replaceall(jokeData.setup,"\n", "<br><br>")+"<br><br>"+replaceall(jokeData.delivery,"\n", "<br><br>");
  		console.log("joooookes",joke);

  	}else{console.log("Joke: \n",jokeData.joke,"\n"); 
var joke=replaceall(jokeData.joke,"\n", "<br><br>");
  }
}else{console.log("error while collecting jokes");}

const jokeadder=document.getElementsByClassName('addJokes')[0];

var newJoke= document.createElement("div");
newJoke.className="col-lg-3 col-md-3 col-sm-8 col-8"


var template=['<div class="card text-white bg-warning mb-3 mx-auto" style="max-width: 18rem;">',
'<div class="card text-white bg-primary mb-3 mx-auto" style="max-width: 18rem;">',
'<div class="card text-white bg-secondary mb-3 mx-auto" style="max-width: 18rem;">',
'<div class="card text-white bg-success mb-3 mx-auto" style="max-width: 18rem;">',
'<div class="card text-white bg-danger mb-3 mx-auto" style="max-width: 18rem;">',
'<div class="card text-white bg-info mb-3 mx-auto" style="max-width: 18rem;">',
'<div class="card text-white bg-dark mb-3 mx-auto" style="max-width: 18rem;">'

]

var indexTemp=Math.floor(Math.random() * (6 - 0 + 1) ) + 0;

console.log(template[indexTemp]);

newJoke.innerHTML =template[indexTemp]+
  '<div class="card-header">Jokes</div>'+
  '<div class="card-body">'+
    
    '<p class="card-text">'+joke+'</p>'+


  '</div>'+
'</div>';

// jokeadder.appendChild(newJoke);
var total = jokeadder.childElementCount
if(total>6){
	jokeadder.removeChild(jokeadder.firstChild);
	
}
// jokeadder.insertBefore(newJoke, jokeadder.firstChild);
jokeadder.appendChild(newJoke);

}



}

}, 9000);





}








function replaceall(str,oldPat,newPat){
    s=str.replace(oldPat,newPat);
    if(s==str){return str;}
    else{return replaceall(s,oldPat,newPat);}
}