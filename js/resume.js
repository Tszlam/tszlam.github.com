;
var navs = $("#nav ul li"),
	pages = $(".page");
var currindex = 0;
init();
listen();

function init() {
	$(pages[currindex]).addClass("show");
}

function change(next) {
	$(pages[currindex]).removeClass("show");
	$(pages[next]).addClass("show");
	currindex = next;
}

function listen() {
	navs.click(function() {
		var next = $(this).index();
		change(next);
	});
}
