

function getJoke(){

var url="https://sv443.net/jokeapi/v2/joke/Programming";



	const Http = new XMLHttpRequest();

	Http.open("GET", url);
	Http.send();

	Http.onreadystatechange = function() {

  if(this.readyState == 4 && this.status==200){
  
  	var jokeData= JSON.parse(Http.responseText);

  	if(!jokeData.error){
  	if(jokeData.type=="twopart"){
  		console.log("Joke: \n",jokeData.setup,"\n",jokeData.delivery,"\n");
  	}else{console.log("Joke: \n",jokeData.joke,"\n"); }
}else{console.log("error while collecting jokes");}

}



}
}