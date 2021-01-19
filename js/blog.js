$(document).ready(function() {
	$.ajax({
		type:'GET',
		url:'http://localhost:8000/blog/paginate'
	}).done(res => {
		console.log(res);
	}).fail(err => {
		console.log(err);
	})
});