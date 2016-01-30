//run on document ready
$(function() {

	function showResults( data ) {
		$('.results').empty();
		var html = "";
		$.each(data, function(i, el) {
			var img = el.snippet.thumbnails.medium;
			var videoId = el.id.videoId;
			html += "<a href='https://www.youtube.com/watch?v="+videoId+"' target='_blank' ><div style='background-image: url("+img.url+");' ><h2>" + el.snippet.title + "</h2></div></a>";
		});
		$('.results').html(html);
	}

	function getRequest( query) {
		var url = "https://www.googleapis.com/youtube/v3/search";
		var params = {
			part: 'snippet',
			key: 'AIzaSyCppL3MRqDJByS_MIWwObcyxZDwRcE7y5k',
			q: query,
			type: 'video'
		};

		$.getJSON(url, params, function(data){
			showResults(data.items);
			console.log(data.items);
		});
	}
	$('#search-form').submit(function(e) {
		e.preventDefault();
		getRequest( $(this).find('#query').val() );
	});
});