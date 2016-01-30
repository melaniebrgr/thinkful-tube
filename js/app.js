//run on document ready
$(function() {

	function showResults( data ) {
		var html = "";
		$.each(data, function(i, el) {
			html += "<div>" + el.snippet.title + "</div>";
		});
		$('.results').html(html);
	}

	function getRequest() {
		var url = "https://www.googleapis.com/youtube/v3/search";
		var params = {
			part: 'snippet',
			key: 'AIzaSyCppL3MRqDJByS_MIWwObcyxZDwRcE7y5k',
			q: 'Adele'
		};

		$.getJSON(url, params, function(data){
			showResults(data.items);
		});
	}
	$('#search-form').submit(function(e) {
		e.preventDefault();
		getRequest( $(this).find('#query').val() );
	});

});