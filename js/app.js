$(document).ready(function() {
	$(".button-collapse").sideNav();
});

var macy = Macy({
    container: '#macy-container',
    trueOrder: false,
    waitForImages: true,
    margin: 15,
    columns: 4,
    breakAt: {
        1200: 3,
        940: 2,
        520: 2,
        400: 1
    }
});