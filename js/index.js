$(function(){
	var topStories="";
	var shows="";
	var asks="";
	var jobs="";
	var eightTopStories=[];

	function load(){
		db.getTopStories(function(response){
			topStories=response;
			console.log(topStories);
			for(var i=0;i<8;i++){
				db.getItem(topStories[i], function(response){
					eightTopStories.push(response);
				});
			}
			console.log(eightTopStories);
		});
		db.getShowStories(function(response){
			shows=response;
		});
		db.getAskStories(function(response){
			asks=response;
		})
		db.getJobStories(function(response){
			jobs=response;
		})
	}

	load();
})