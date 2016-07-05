var navbarItems = document.getElementsByClassName('navbar-item');

for (var i = 0; i < navbarItems.length; i++) {
	navbarItems[i].addEventListener('click', function (evt) {
		var sectionToGo = this.getElementsByTagName('a')[0].href.split('#');
		if (sectionToGo.length>1) {
			evt.preventDefault();
			var goTo = sectionToGo[sectionToGo.length - 1];
			getElementbyIdAndScroll(goTo);
		}
	});
}

function getElementbyIdAndScroll (name) {
	var elem;
	if (name=='') {
		elem = document.getElementsByClassName('header')[0];
	} else {
		elem = document.getElementById(name);
	}

	scrollToElement(elem);
}

function scrollToElement(element) {
	var jump = parseInt(element.getBoundingClientRect().top * .3);
	document.body.scrollTop += jump;
	document.documentElement.scrollTop += jump;

	if (!element.lastJump || element.lastJump > Math.abs(jump)) {
		element.lastJump = Math.abs(jump);

		setTimeout (function () {
			scrollToElement(element);
		}, "60");
	} else {
		element.lastJump = null;
	}
}