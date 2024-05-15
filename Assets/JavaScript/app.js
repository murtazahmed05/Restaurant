var myCarousel = document.getElementById("carouselExampleAutoplaying");
var carousel = new bootstrap.Carousel(myCarousel);

// Function to show a menu

function showMenu() {
	var element = document.getElementById("Menu");
	if (element) {
		element.scrollIntoView({ behavior: "smooth" });
	}
}

// Opening a New TAB

function openNewTab(url) {
	window.open("https://www.girlandthegoat.com/chicago#about", "_blank");
}
// ------------------
