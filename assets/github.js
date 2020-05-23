function getContribution(){

console.log('collecting total number of contribution in github......');

	var url="https://github-contributions-api.now.sh/v1/ujjaldas132";

	const Http = new XMLHttpRequest();

	Http.open("GET", url);
	Http.send();

	Http.onreadystatechange = function() {

  if(this.readyState == 4 && this.status==200){
  
  	var gitData= JSON.parse(Http.responseText);

  	var totalcontribution=0;
  	for(var x in gitData.years){
  
  		totalcontribution+=gitData.years[x].total;
  	}
  	console.log('my total contribution in github: ',totalcontribution);
  }
}

}