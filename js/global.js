var db = {
	getItem: function(id, successFunc){
		var url = "https://hacker-news.firebaseio.com/v0/item/"+id+".json";
		$.get(url, successFunc);
	},
	getUser: function(username, successFunc){
		var url = "https://hacker-news.firebaseio.com/v0/user/"+username+".json";
		$.get(url, successFunc);
	},
	getMaxItem: function(successFunc){
		var url = "https://hacker-news.firebaseio.com/v0/maxitem.json";
		$.get(url, successFunc);
	},
	getTopStories: function(successFunc){
		var url = "https://hacker-news.firebaseio.com/v0/topstories.json";
		$.get(url, successFunc);
	},
	getNewStories: function(successFunc){
		var url = "https://hacker-news.firebaseio.com/v0/newstories.json";
		$.get(url, successFunc);
	},
	getAskStories: function(successFunc){
		var url = "https://hacker-news.firebaseio.com/v0/askstories.json";
		$.get(url, successFunc);
	},
	getShowStories: function(successFunc){
		var url = "https://hacker-news.firebaseio.com/v0/showstories.json";
		$.get(url, successFunc);
	},
	getJobStories: function(successFunc){
		var url = "https://hacker-news.firebaseio.com/v0/jobstories.json";
		$.get(url, successFunc);
	},
	getUpdates: function(successFunc){
		var url = "https://hacker-news.firebaseio.com/v0/updates.json";
		$.get(url, successFunc);
	}
}